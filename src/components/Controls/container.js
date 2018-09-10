import { connect } from 'react-redux';
import Controls from '.';
import { postThenAddTask } from '../../actions/tasks';

const mapStateToProps = state => ({
  user: state.user,
  tasks: state.tasks,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    addTask: text => dispatch(postThenAddTask(text, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(Controls);
