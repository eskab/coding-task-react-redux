import * as types from '../constans/actionTypes'

export const updateItem = (userid, id, body, cb) => {
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
        done: false
      })
    })
    .then(response => response.json())
    .then(json => cb(json))
    .catch(error => console.log(error))    
  }
}

export const applyChanges = (userid, id, body) => {
  return dispatch => {
    dispatch(updateItem(userid, id, body, json => dispatch({...json, type: types.EDIT_TODO, editMode: false})))
  }
}

export const toggleEditTodo = (id, editMode) => {
  return {
    type: types.TOGGLE_EDIT_TODO,
    id: id,
    editMode: (editMode !== undefined) ? !editMode : true
  }
}