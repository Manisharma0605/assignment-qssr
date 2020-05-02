import React,{useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';
import Button from '@material-ui/core/Button';
import {closeFormAction, listArray} from './action';
import { useDispatch, useSelector } from 'react-redux';




function AddForm(props) {
    const dispatch = useDispatch();
    const { handleSubmit } = props;
       
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
                  type="text"
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
                  name="facility"
                  component={RenderField}
                  type="text"
                  label="Facility Times"
                  required
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
       </div>
    )
}

export default reduxForm({
    form: 'AddForm'  
  })(AddForm)
