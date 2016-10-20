import * as types from '../constans/actionTypes'

export const fetchTodos = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3000/tasks?userid=${id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)))
      .catch(error => console.log(error))
  }
}

export const receiveTodos = (json) => {
  return {
    type: types.RECEIVE_TODOS,
    list: json
  }
}

export const deleteItem = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        id: id
      })
    })
    .then(response => response.json())
    .then(json => dispatch({...json, type: types.DELETE_TODO, id: id }))
    .catch(error => console.log(error))
  }  
}

export const toggleItem = (userid, id, body, done) => {
  return dispatch => {
    return fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: userid, 
        id: id,
        body: body,
        done: !done
      })
    })
    .then(response => response.json())
    .then(json => dispatch({...json, type: types.TOGGLE_TODO, id: id, done: done, body: body}))
    .catch(error => console.log(error))    
  }
}

export const addTodo = (id, body, userid) => {
  return dispatch => {
    return fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: userid,
        id: id,
        body: body,
        done: false
      })
    })
    .then(response => response.json())
    .then(json => dispatch({...json, type: types.ADD_TODO }))
    .catch(error => console.log(error))
  }      
}

export const addTodoView = () => {
  return {
    type: types.ADD_TODO_VIEW
  }
}

export const setFilter = (filter) => {
  return {
    type: types.SET_FILTER,
    filter: filter
  }
}

export const setSortingType = (sorting) => {
  return {
    type: types.SET_SORTING_TYPE,
    sortType: {
      type: sorting
    }
  }
}

export const setSortingBy = (sorting) => {
  return {
    type: types.SET_SORTING_BY,
    sortType: {
      by: sorting
    }
  }
}