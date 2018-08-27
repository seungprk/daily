import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import { patchThenUpdateTask, reqThenDeleteTask, toggleEdit } from '../actions/tasks';

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
    toggleTask: (task) => {
      const changedTask = { ...task, completed: !task.completed };
      dispatch(patchThenUpdateTask(changedTask, user.id));
    },
    changeType: (type, task) => {
      const changedTask = { ...task, type };
      dispatch(patchThenUpdateTask(changedTask, user.id));
    },
    toggleEdit: taskId => dispatch(toggleEdit(taskId)),
    deleteTask: taskId => dispatch(reqThenDeleteTask(taskId, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(TaskList);
