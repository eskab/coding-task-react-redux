import React, { PropTypes } from 'react'

const List = ({ done, body, editMode, toggle, del, edit, applyChanges  }) => {
  return (
    <div className="list-item">
      <div className="list-item-content" onClick={edit}>
        { !editMode 
          ?
          <span className={(done) ? 'list-item-done' : ''}>{body}</span>
          :
          <input 
            defaultValue={body}
            onKeyPress={applyChanges}
            autoFocus
          />
        }
      </div>
      <div className="list-item-buttons">
        <button onClick={toggle}>
          { 
            done
            ?
            <i className="fa fa-color fa-dot-circle-o"></i>
            :
            <i className="fa fa-circle-o"></i>
          }
        </button>
        <button onClick={del}><i className="fa fa-trash-o"></i></button>
      </div>
    </div>
  );
}

List.propTypes = {
  done: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  applyChanges: PropTypes.func.isRequired
};

export default List;