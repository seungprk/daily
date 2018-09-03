import { connect } from 'react-redux';
import ItemRepeat from '.';
import { updateTask } from '../../actions/tasks';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task,
  user: state.user,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user, task } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    task,
    updateInput: (e) => {
      const { id, value } = e.target;
      const changedTask = {
        ...task,
        type: {
          ...task.type,
          data: {
            ...task.type.data,
            [id]: value,
          },
        },
      };
      dispatch(updateTask(changedTask, user.id));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ItemRepeat);
