import React, { PropTypes } from 'react'

import ListItem from './ListItem'

const List = ({ list, toggle, del, edit, applyChanges }) => {
  return (
    <div className="list">
      {list.map(item => 
        <ListItem
          key={item.id}
          done={item.done}
          body={item.body}
          editMode={item.editMode}
          toggle={() => toggle(item.userid, item.id, item.body, item.done)}
          del={() => del(item.id)}
          edit={() => edit(item.id, item.editMode)}
          applyChanges={(e) => {
            if (e.key === 'Enter') {
              applyChanges(item.userid, item.id, e.target.value)
            }
          }}
        />
      )}
      <div className="list-info">
        <span>Click a todo to edit it</span>
      </div>
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired).isRequired,
  del: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  applyChanges: PropTypes.func.isRequired  
};

export default List;