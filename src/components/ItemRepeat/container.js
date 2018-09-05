import { connect } from 'react-redux';
import ItemRepeat from '.';
import { putThenUpdateRepeat, updateRepeat } from '../../actions/repeat';

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
      if (id === 'repeat') dispatch(updateRepeat(task.id, task.type.data.completed, value, user.id));
      else if (id === 'completed') dispatch(updateRepeat(task.id, value, task.type.data.repeat, user.id));
    },
    saveRepeat: () => {
      const { completed, repeat } = task.type.data;
      dispatch(putThenUpdateRepeat(task.id, completed, repeat, user.id));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ItemRepeat);
