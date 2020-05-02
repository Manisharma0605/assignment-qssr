import React,{useState} from 'react';
import AddForm from './addFrom';
import EditForm from './editForm'
import SingleList from './singleList'
import {addFormAction,editValueReducer, deleteAction} from './action'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './App.css';

function App() {

  const stateApp = useSelector( state =>{
      return state.Todos
  })
 
  const delValueCheck = useSelector(state =>{
      return state.Todos.delteval
  })

 const dispatch = useDispatch();
 const listCollection = JSON.parse(localStorage.getItem('list'));

 const [listLocation, setListLocation] = useState(listCollection)


const del = (item) =>{
   var delLocationList = listCollection.filter( tst => tst.phone !== item);
   dispatch(deleteAction(delLocationList));
  }

const editFun = (item) =>{
  // var delLocationList = listCollection.filter( tst => tst.phone !== item);
    var editlist = listCollection.find((list) => list.phone === item)
    dispatch(editValueReducer(editlist))
    var delLocationList = listCollection.filter( tst => tst.phone !== item);
   dispatch(deleteAction(delLocationList));
}

  return (
    <div className="App">
      <header className="App-header">
           <span>Locations</span>
           <Button color="primary" variant="contained" onClick={() => dispatch(addFormAction())} >+ Add Location</Button>
      </header>
      {listCollection !== null && listCollection.length > 0 ?
        <div className='list-header'>
           <h3>Location Name</h3>
            <h3>Address</h3>
           <h3>Phone no.</h3>
           <h3></h3>
        </div>
        :
        null
      }
      
      <div>
        {stateApp.addForm &&<AddForm/>}
         {stateApp.editForm && <EditForm/>}
        { 
          listCollection !== null && listCollection.length > 0   ? 
           <ul>{listCollection.map( (item, index) => <SingleList del={() => del(item.phone)} editFun = {() => editFun(item.phone)} item = {item} key={index}/>)}</ul>: 
           <div>
             <LocationOnIcon style={{color:'blue', fontSize:'100px'}}/>
             <span style={{ fontSize:'1.5em', display:'block'}}>Kindly Add Your Location First </span>
             </div>
        }
      </div>
    </div>
  );
}

export default App;
