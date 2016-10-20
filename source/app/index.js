import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import '../index.html'
import '../styles/main.scss'

import App from './App'
import todoApp from './reducers'
import * as filters from './constans/filterTypes'
import * as sorts from './constans/sortTypes'
import * as views from './constans/viewTypes'

const store = createStore(
  todoApp,
  {
    user: {
      id: 0,
      logged: false
    },
    list: [],
    filter: filters.ALL,
    sortType: {
      by: sorts.NAME,
      type: sorts.ASC
    },
    view: views.LOGIN_BOX
  },
  applyMiddleware(
    thunkMiddleware
  )  
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);