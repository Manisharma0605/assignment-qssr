import React,{useState,useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import RenderField1 from './RenderField1';
import Button from '@material-ui/core/Button';
import {closeFormAction, listArray, facilityModalOpen} from './action';
import { useDispatch, useSelector } from 'react-redux';
import ListFacilities from './listFacilities';




function AddForm(props) { 
var FacilityModal = useSelector( state => state.Facility.facilityModal)
console.log('FacilityModal', FacilityModal)
    const dispatch = useDispatch();
    const { handleSubmit } = props;

    const funOpenModal = () =>{
       dispatch(facilityModalOpen())
    }
   
    var facVal = JSON.parse(localStorage.getItem('facilityValue'));
     

    return (
        <div className='wrapper-form-main'>
        <div className='bg-form-wrapper' onClick={()=>dispatch(closeFormAction())}></div>
        <Paper className='form-paper'>
          <h3>Add Location</h3>
        <form onSubmit={handleSubmit((formValue) => {
            dispatch(listArray(formValue))
        })} style={{width:'100%'}}>

        <Grid container justify="space-between">
            <Grid item sm={12}>
                <Field
                  name="location"
                  component={RenderField}
                  type="text"
                  label="Location Name"
                  required
                />
          </Grid>
          <Grid item sm={6}>
          <Field
                  name="address1"
                  component={RenderField}
                  type="text"
                  label="Address Line 1"
                  required
                />
         </Grid>
         <Grid item sm={6}>
         <Field
                  name="suite"
                  component={RenderField}
                  type="number"
                  label="Suite No."
                  required
                />
         </Grid>
         <Grid item sm={6}>
         <Field
                  name="address2"
                  component={RenderField}
                  type="text"
                  label="Address Line 2"
                  required
                />
         </Grid>
         <Grid item sm={3}>
         <Field
                  name="city"
                  component={RenderField}
                  type="text"
                  label="city"
                  required
                />
         </Grid>
         <Grid item sm={3}>
         <Field
                  name="state"
                  component={RenderField}
                  type="text"
                  label="state"
                  required
                /> 
         </Grid>
         <Grid item sm={3}>
         <Field
                  name="zipCode"
                  component={RenderField}
                  type="number"
                  label="Zip Code"
                  required
                />
         </Grid>
         <Grid item sm={3}>
         <Field
                  name="phone"
                  component={RenderField}
                  type="number"
                  label="Phone Number"
                  required
                />
         </Grid>
         <Grid item sm={6}>
         <Field
                  name="timeZone"
                  component={RenderField}
                  type="text"
                  label="Time Zone"
                  required
                />
         </Grid>
         <Grid item sm={6}>
         <Field
                  name="suite"
                  component={RenderField1}
                  type="text"
                  label="Facility Time"
                  required
                  openWindow = {funOpenModal}
                  valueFacility= {facVal || 'choose time'}
                />
         </Grid>
         <Grid item sm={6}>
         <Field
                  name="apointment"
                  component={RenderField}
                  type="text"
                  label="Appointment Pool"
                  required
                />
         </Grid>
         <div className='btn-box'>
            <Button color="secondary" variant="contained" onClick={()=>dispatch(closeFormAction())} >Cancel</Button>
            <Button className="btnForms" color="primary" variant="contained"  type="submit">Save</Button>
         </div>
       </Grid> 
       </form>
       </Paper>
       {FacilityModal && <ListFacilities/>}
       </div>
    )
}

export default reduxForm({
    form: 'AddForm'  
  })(AddForm)

