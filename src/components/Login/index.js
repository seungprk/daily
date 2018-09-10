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
      isDropdown: false,
    };

    this.dropdownRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUpSwitch = this.handleSignUpSwitch.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleLoginBox = this.toggleLoginBox.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(e.target)) {
      this.setState({ isDropdown: false, isSignUp: false });
    }
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
      isSignUp: false,
      isDropdown: false,
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

  handleSignUpSwitch() {
    const { isSignUp } = this.state;

    if (!isSignUp) {
      this.setState({ isSignUp: true, isDropdown: true });
    } else {
      this.setState({ isSignUp: false, isDropdown: false });
    }
  }

  toggleLoginBox() {
    const { isDropdown, isSignUp } = this.state;

    if (!isSignUp) {
      this.setState({ isDropdown: !isDropdown, isSignUp: false });
    } else {
      this.setState({ isDropdown: true, isSignUp: false });
    }
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
      isDropdown,
    } = this.state;

    if (user) {
      return (
        <div className="login">
          <button className="login__button" type="button" onClick={this.handleLogOut}>
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div className="login">
        <button className="login__button" type="button" onClick={this.handleSignUpSwitch}>
          Sign Up
        </button>
        <button className="login__button" type="button" onClick={this.toggleLoginBox}>
          Log In
        </button>
        {isDropdown && (
          <div className="login__dropdown" ref={this.dropdownRef}>
            <form onSubmit={this.handleSubmit}>
              <input
                className="login__input"
                id="username"
                type="text"
                value={username}
                placeHolder="Username"
                onChange={this.handleChange}
              />
              {isSignUp && (
                <input
                  className="login__input"
                  id="email"
                  type="email"
                  value={email}
                  placeHolder="Email"
                  onChange={this.handleChange}
                />
              )}
              <input
                className="login__input"
                id="password"
                type="password"
                value={password}
                placeHolder="Password"
                onChange={this.handleChange}
              />
              <button className="login__submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
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
