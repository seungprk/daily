import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import TaskListContainer from '../../containers/TaskListContainer';
import ControlsContainer from '../../containers/ControlsContainer';
import LoginContainer from '../../containers/LoginContainer';

const App = ({ user }) => {
  const today = new Date(Date.now());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Daily!
        </h1>
      </header>
      <LoginContainer />
      {user ? (
        <div>
          <ControlsContainer />
          <TaskListContainer targetDate={today} />
        </div>
      ) : null}
    </div>
  );
};

App.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  user: null,
};

export default App;
