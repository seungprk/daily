import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskListContainer from '../../containers/TaskListContainer';
import Controls from '../Controls/Controls';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        Welcome to React
      </h1>
    </header>
    <Controls />
    <TaskListContainer />
  </div>
);

export default App;
