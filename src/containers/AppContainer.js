import { connect } from 'react-redux';
import App from '../components/App/App';
import { checkLogin } from '../actions/user';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  checkLogin: () => dispatch(checkLogin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
