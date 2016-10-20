import { connect } from 'react-redux'

import { deleteItem, toggleItem } from '../actions/list'
import { toggleEditTodo, applyChanges } from '../actions/todo'
import * as filters from '../constans/filterTypes' 

import { sortASCName, sortDSCName, sortASCDone, sortDSCDone } from '../utils/index'

import List from '../components/List'

const getTasks = (list, filter, sortType) => {
  let compare = getSortingFunction(sortType);

  switch (filter) {
    case filters.ALL:
      return list.sort(compare).filter(t => t);
    case filters.TODO:
      return list.sort(compare).filter(t => !t.done)
    case filters.DONE:
      return list.sort(compare).filter(t => t.done)  
    default: 
      return list.sort(compare).filter(t => t);
  }  
}

const getSortingFunction = (sortType) => {
  if (sortType.by === 'NAME') {
    return (sortType.type === 'ASC') ? sortASCName : sortDSCName;
  } else if (sortType.by === 'DONE') {
    return (sortType.type === 'ASC') ? sortASCDone : sortDSCDone;
  }
}

const mapStateToProps = (state) => {
  return {
    list: getTasks(state.list, state.filter, state.sortType)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    del: (id) => dispatch(deleteItem(id)),
    toggle: (userid, id, body, done) => dispatch(toggleItem(userid, id, body, done)),
    edit: (id, editMode) => dispatch(toggleEditTodo(id, editMode)),
    applyChanges: (userid, id, body) => dispatch(applyChanges(userid, id, body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)