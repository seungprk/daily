import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './style.css';
import TaskListContainer from '../TaskList/container';
import ControlsContainer from '../Controls/container';
import LoginContainer from '../Login/container';

class App extends React.Component {
  componentDidMount() {
    const { checkLogin } = this.props;
    checkLogin();
  }

  render() {
    const { user } = this.props;
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
        {user && (
          <div>
            <ControlsContainer />
            <TaskListContainer targetDate={today} />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({}),
  checkLogin: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
};

export default App;