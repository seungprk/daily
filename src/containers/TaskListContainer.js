import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { patchThenToggleTask, reqThenDeleteTask, getThenLoadTasks } from '../actions/tasks';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasks.filter((task) => {
    const taskDateStr = new Date(task.date).toDateString();
    return taskDateStr === ownProps.targetDate.toDateString();
  });

  return {
    user: state.user,
    tasks,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { user, tasks } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    tasks,
    loadTasks: () => dispatch(getThenLoadTasks(user.id)),
    toggleTask: taskId => dispatch(patchThenToggleTask(taskId, user.id)),
    deleteTask: taskId => dispatch(reqThenDeleteTask(taskId, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(TaskList);
