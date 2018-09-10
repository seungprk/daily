import { connect } from 'react-redux';
import TaskList from '.';
import { postThenCopyTasks } from '../../actions/tasks';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasks.filter((task) => {
    const taskDateStr = new Date(task.date).toDateString();
    return taskDateStr === ownProps.targetDate.toDateString();
  });

  return {
    tasks,
    user: state.user,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { user, tasks } = stateProps;
  const { dispatch } = dispatchProps;

  const yesterdayStr = new Date(Date.now() - (24 * 60 * 60 * 1000)).toDateString();
  const yesterdayTasks = tasks.filter((task) => {
    const dateStr = new Date(task.date).toDateString();
    return dateStr === yesterdayStr;
  });

  return {
    tasks,
    copyYesterday: () => {
      if (yesterdayTasks.length > 0) dispatch(postThenCopyTasks(yesterdayTasks, user.id));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(TaskList);
