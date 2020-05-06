import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import RootReducer from './reducer/'
// import thunk from 'redux-thunk';
import App from '../src/App'



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

