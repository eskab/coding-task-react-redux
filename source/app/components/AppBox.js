import React from 'react';

import Dashboard from '../containers/Dashboard'
import List from '../containers/List'
import AddTodo from '../containers/AddTodo'

const AppBox = (props) => {
  return (
    <div className="app-box">
      <Dashboard />
      { (props.view === 'LIST')
        ?
        <List />
        :
        <AddTodo />
      }
    </div>
  )
}

export default AppBox