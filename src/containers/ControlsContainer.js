import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { addTask } from '../actions/tasks';

const mapDispatchToProps = dispatch => ({
  addTask: text => dispatch(addTask(text)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Controls);
