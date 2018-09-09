import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isSignUp: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createUser, loginUser } = this.props;
    const {
      username,
      email,
      password,
      isSignUp,
    } = this.state;

    if (isSignUp) createUser(username, email, password);
    else loginUser(username, password);

    this.setState({
      username: '',
      email: '',
      password: '',
    });
  }

  handleChange(e) {
    if (e.target.type === 'text') {
      this.setState({ username: e.target.value });
    } else if (e.target.type === 'email') {
      this.setState({ email: e.target.value });
    } else if (e.target.type === 'password') {
      this.setState({ password: e.target.value });
    }
  }

  handleSwitch() {
    const { isSignUp } = this.state;
    this.setState({ isSignUp: !isSignUp });
  }

  handleLogOut() {
    const { logOut } = this.props;
    logOut();
  }

  render() {
    const { user } = this.props;
    const {
      username,
      email,
      password,
      isSignUp,
    } = this.state;

    if (user) {
      return (
        <button type="button" onClick={this.handleLogOut}>
          Log Out
        </button>
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input id="username" type="text" value={username} onChange={this.handleChange} />
          </label>
          {isSignUp && (
            <label htmlFor="email">
              Email
              <input id="email" type="email" value={email} onChange={this.handleChange} />
            </label>
          )}
          <label htmlFor="password">
            Password
            <input id="password" type="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="submit">
            Submit
          </button>
        </form>
        <button type="button" onClick={this.handleSwitch}>
          {isSignUp ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  createUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

Login.defaultProps = {
  user: null,
};

export default Login;
