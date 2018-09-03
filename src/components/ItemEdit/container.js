import { connect } from 'react-redux';
import ItemDisplay from '.';
import {
  updateTask,
  reqThenDeleteTask,
  patchThenToggleEdit,
} from '../../actions/tasks';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task,
  user: state.user,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user, task } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    task,
    changeType: (type) => {
      const changedTask = { ...task, type };
      dispatch(updateTask(changedTask, user.id));
    },
    toggleEdit: () => dispatch(patchThenToggleEdit(task, user.id)),
    deleteTask: () => dispatch(reqThenDeleteTask(task.id, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ItemDisplay);
