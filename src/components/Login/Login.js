import React from 'react';

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
    if (e.type === 'text') {
      this.setState({ username: e.target.value });
    } else if (e.type === 'email') {
      this.setState({ email: e.target.value });
    } else if (e.type === 'password') {
      this.setState({ password: e.target.value });
    }
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={username} onChange={this.handleChange} />
          <input type="email" value={email} onChange={this.handleChange} />
          <input type="password" value={password} onChange={this.handleChange} />
          <button type="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
