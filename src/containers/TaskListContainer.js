import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { patchThenToggleTask, reqThenDeleteTask, getThenLoadTasks } from '../actions/tasks';

const mapStateToProps = state => ({
  user: state.user,
  tasks: state.tasks,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user, tasks } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    tasks,
    loadTasks: () => dispatch(getThenLoadTasks(user)),
    toggleTask: taskId => dispatch(patchThenToggleTask(taskId, user)),
    deleteTask: taskId => dispatch(reqThenDeleteTask(taskId, user)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(TaskList);
