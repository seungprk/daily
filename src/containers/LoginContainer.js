import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { createThenSetUser, loginThenSetUser, logOut } from '../actions/user';

const mapStateToProps = state => ({
  user: state.user,
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  createUser: (
    username,
    email,
    password,
  ) => dispatch(createThenSetUser(username, email, password)),
  loginUser: (username, password) => dispatch(loginThenSetUser(username, password)),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
