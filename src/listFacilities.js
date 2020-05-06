import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import {facilityModalClose} from './action'
import { useDispatch } from 'react-redux';



 function ListFacilities() {
     const dispatch = useDispatch();
    const checkValue = (e) =>{

        localStorage.setItem('facilityValue', JSON.stringify(e.target.value))
    }
    return (
        <div className='listFacilities-wrapper'>
          <div className='bg-form-wrapper' onClick={()=>dispatch(facilityModalClose())}></div>
        <ul>
            <li>
            <Checkbox
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                value={'8:30am - 9:30pm , Monday'}
                onChange={(e)=>checkValue(e)}
                name='facilityValue1'
            />
             <span>8:30am - 9:30pm , Monday</span>
            </li>
            <li>
            <Checkbox
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                value={'8:30am - 9:30pm, Tuesday'}
                onClick={(e)=>checkValue(e)}
                name='facilityValue'
            />
             <span>8:30am - 9:30pm , Tuesday</span>
            </li>
        </ul>
        </div>
    )
}

export default ListFacilities;