import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createUser } = this.props;
    const { username, email, password } = this.state;

    createUser(username, email, password);
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
    const { username, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input id="username" type="text" value={username} onChange={this.handleChange} />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="email" value={email} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Password
            <input id="password" type="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default Login;
