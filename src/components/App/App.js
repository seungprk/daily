import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListContainer from '../../containers/TaskListContainer';
import ControlsContainer from '../../containers/ControlsContainer';
import LoginContainer from '../../containers/LoginContainer';

const App = () => {
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
      <ControlsContainer />
      <TaskListContainer targetDate={today} />
    </div>
  );
};

export default App;
