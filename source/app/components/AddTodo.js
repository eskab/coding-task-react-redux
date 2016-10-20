import React, { PropTypes } from 'react';

import { randomString } from '../utils';

const handleAddTodo = (e, input, userid, cb) => {
  if (e.type === 'keypress' && e.key !== 'Enter' || !input.value) {
    return;
  }

  cb(randomString(16), input.value, userid);
  input.value = '';
};

const TodoAddForm = ({ user, handler }) => {
  let input;

  return (
    <div className="list">
      <p>Add new task</p>
      <div className="list-item">
        <input onKeyPress={(e) => handleAddTodo(e, input, user.id, handler)} ref={node => { input = node; }} />
        <button onClick={(e) => handleAddTodo(e, input, user.id, handler)}><i className="fa fa-plus-circle"></i></button>
      </div>
    </div>
  )
};

TodoAddForm.propTypes = {
  handler: PropTypes.func.isRequired
};

export default TodoAddForm;