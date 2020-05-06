import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Todos from './reducer'
import FacilityReducer from './facility'

const RootReducer = combineReducers({
    form: formReducer,
    Todos,
    Facility: FacilityReducer,
})

export default RootReducer;