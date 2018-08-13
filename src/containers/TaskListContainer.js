import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { toggleTask, deleteTask } from '../actions/tasks';

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id)),
  deleteTask: id => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);
