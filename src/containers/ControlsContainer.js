import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { postThenAddTask, postThenCopyTasks } from '../actions/tasks';

const mapStateToProps = state => ({
  user: state.user,
  tasks: state.tasks,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user, tasks } = stateProps;
  const { dispatch } = dispatchProps;

  const yesterdayStr = new Date(Date.now() - (24 * 60 * 60 * 1000)).toDateString();
  const yesterdayTasks = tasks.filter((task) => {
    const dateStr = new Date(task.date).toDateString();
    return dateStr === yesterdayStr;
  });

  return {
    addTask: (text, type) => dispatch(postThenAddTask(text, type, user.id)),
    copyYesterday: () => {
      if (yesterdayTasks.length > 0) dispatch(postThenCopyTasks(yesterdayTasks, user.id));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(Controls);
