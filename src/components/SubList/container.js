import { connect } from 'react-redux';
import SubList from '.';
import { postThenAddItem } from '../../actions/subListItem';

const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task,
  user: state.user,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { user, task } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    task,
    addItem: text => dispatch(postThenAddItem(task.id, text, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(SubList);
