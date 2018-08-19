import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { postThenSetUser } from '../actions/user.js';

const mapStateToProps = state => ({
  user: state.user,
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  createUser: (
    username,
    email,
    password,
  ) => dispatch(postThenSetUser(username, email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
