import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'
import Todos from './reducer'
import {reducer as formReducer} from 'redux-form'
// import thunk from 'redux-thunk';
import App from '../src/App'

const RootReducer = combineReducers({
  Todos,
  form: formReducer,
})

const store = createStore(
  RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

