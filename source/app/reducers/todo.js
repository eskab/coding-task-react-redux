import * as types from '../constans/actionTypes'

export const todo = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TODO: 
      return {
        userid: action.userid,
        id: action.id,
        body: action.body,
        done: action.done
      }    
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        done: !action.done
      };
    case types.TOGGLE_EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        editMode: action.editMode
      };        
    case types.EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        done: action.done,
        editMode: false,
        body: action.body
      };          
  }  
}