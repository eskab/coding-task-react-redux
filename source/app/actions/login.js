import * as types from '../constans/actionTypes'

import { fetchTodos } from './list'

export const loginUser = (credentials) => {
  return dispatch => {
    return fetch(`http://localhost:3000/users/`)
      .then(response => response.json())
      .then(json => json.filter(user => user.name === credentials[0] && user.password === credentials[1]))
      .then(user => dispatch({type: types.LOGIN_USER, logged: !!user.length, id: user[0].id, name: user[0].name}))
      .then(user => dispatch(fetchTodos(user.id)))
      .catch(error => console.log(error))
  }
}