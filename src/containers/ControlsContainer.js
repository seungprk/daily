import { connect } from 'react-redux';
import Controls from '../components/Controls/Controls';
import { postThenAddTask } from '../actions/tasks';

const mapStateToProps = state => ({
  user: state.user,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    addTask: text => dispatch(postThenAddTask(text, user)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(Controls);
