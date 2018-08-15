import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { postThenAddTask } from '../actions/tasks';

const mapDispatchToProps = dispatch => ({
  addTask: text => dispatch(postThenAddTask(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
