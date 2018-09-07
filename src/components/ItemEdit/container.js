import { connect } from 'react-redux';
import ItemDisplay from '.';
import {
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
    toggleEdit: () => dispatch(toggleEdit(task.id)),
    deleteTask: () => dispatch(reqThenDeleteTask(task.id, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ItemDisplay);
