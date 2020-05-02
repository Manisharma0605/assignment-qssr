import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create'


 const SingleList = (props) => {
     const delFun = props.del;
     const editFun = props.editFun
     const{location,phone,address1} = props.item;
    return (
        <li className='list-location'>
            <span>{location}</span>
            <span>{address1}</span>
            <span>{phone}</span>
            <div className='btn-wrapper-list'>
               <span onClick={editFun}><CreateIcon/></span>
               <span onClick={delFun}><DeleteIcon/></span>
            </div>
        </li>
    )
}

export default SingleList;
