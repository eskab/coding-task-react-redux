import React, { PropTypes } from 'react'

const Dashboard = ({ user, filter, addTodoView, setFilter, setSortingType, setSortingBy }) => {
  return (
    <div className="dashboard">
      <span className="dashboard-user">Użytkownik: {user.name}</span>
      <button onClick={addTodoView}>Add Todo</button>
      <button onClick={setFilter.bind(null, 'DONE')}>Hide todo</button>
      <button onClick={setFilter.bind(null, 'TODO')}>Hide done</button>
      <button onClick={setFilter.bind(null, 'ALL')}>Show all</button>
      <button onClick={setSortingType.bind(null, 'ASC')}>Sort type: ASC</button>
      <button onClick={setSortingType.bind(null, 'DSC')}>Sort type: DSC</button>
      <button onClick={setSortingBy.bind(null, 'NAME')}>Sort by name</button>
      <button onClick={setSortingBy.bind(null, 'DONE')}>Sort by done</button>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  addTodoView: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSortingType: PropTypes.func.isRequired,
  setSortingBy: PropTypes.func.isRequired    
};

export default Dashboard;