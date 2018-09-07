import { connect } from 'react-redux';
import ItemDisplay from '.';
import {
  patchThenUpdateTask,
  reqThenDeleteTask,
  toggleEdit,
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
      let data;
      if (type.name === 'list') {
        data = [];
      }

      const changedTask = { ...task, type: { ...type, data } };
      dispatch(patchThenUpdateTask(changedTask, user.id));
    },
    toggleEdit: () => dispatch(toggleEdit(task.id)),
    deleteTask: () => dispatch(reqThenDeleteTask(task.id, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ItemDisplay);
