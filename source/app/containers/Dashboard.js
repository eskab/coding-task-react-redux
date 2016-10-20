import { connect } from 'react-redux'

import { addTodoView, setFilter, setSortingType, setSortingBy } from '../actions/list'

import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  const { user, filter } = state;
  
  return { user, filter }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoView: () => dispatch(addTodoView()),
    setFilter: (filter) => dispatch(setFilter(filter)),
    setSortingType: (sorting) => dispatch(setSortingType(sorting)),
    setSortingBy: (sorting) => dispatch(setSortingBy(sorting))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)