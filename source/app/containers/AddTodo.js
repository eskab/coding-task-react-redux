import { connect } from 'react-redux';

import { addTodo } from '../actions/list';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => {
  const { user } = state;
  
  return { user }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (id, body, userid) => dispatch(addTodo(id, body, userid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)