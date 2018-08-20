import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

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

  render() {
    const {
      username,
      email,
      password,
      isSignUp,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input id="username" type="text" value={username} onChange={this.handleChange} />
          </label>
          {isSignUp ? (
            <label htmlFor="email">
              Email
              <input id="email" type="email" value={email} onChange={this.handleChange} />
            </label>
          ) : null}
          <label htmlFor="password">
            Password
            <input id="password" type="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="button">
            Submit
          </button>
        </form>
        <button type="button" onClick={this.handleClick}>
          {isSignUp ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default Login;
