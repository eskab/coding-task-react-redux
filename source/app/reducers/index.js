import * as types from '../constans/actionTypes'
import * as views from '../constans/viewTypes'

import { todo } from './todo'

const todoApp = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        view: views.LIST,
        user: {
          id: action.id,
          logged: action.logged,
          name: action.name
        }
      }
    case types.ADD_TODO_VIEW:
      return {
        ...state,
        view: views.ADD_TODO
      }
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
        view: views.LIST
      }      
    case types.SET_SORTING_TYPE:
      return {
        ...state,
        sortType: {
          ...state.sortType,
          type: action.sortType.type
        },
        view: views.LIST
      }
    case types.SET_SORTING_BY:
      return {
        ...state,
        sortType: {
          ...state.sortType,
          by: action.sortType.by
        },
        view: views.LIST
      }
    case types.ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          todo(state, action)
        ]
      }          
    case types.DELETE_TODO:
      const todoId = action.id;
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      }      
    case types.TOGGLE_TODO:
    case types.TOGGLE_EDIT_TODO:    
    case types.EDIT_TODO:    
      return {
        ...state, 
        list: state.list.map(t => todo(t, action))
      }      
    case types.RECEIVE_TODOS:
      return {
        ...state,
        list: action.list
      }
    default: 
      return state;
  }
}

export default todoApp;