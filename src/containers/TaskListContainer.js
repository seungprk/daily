import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { patchThenToggleTask, reqThenDeleteTask } from '../actions/tasks';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(patchThenToggleTask(id)),
  deleteTask: id => dispatch(reqThenDeleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
