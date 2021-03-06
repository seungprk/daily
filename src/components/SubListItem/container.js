import { connect } from 'react-redux';
import SubListItem from '.';
import { deleteThenRemoveItem, patchThenToggleItem } from '../../actions/subListItem';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.user,
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    id,
    text,
    completed,
    task,
    user,
  } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    text,
    completed,
    deleteItem: () => dispatch(deleteThenRemoveItem(id, task.id, user.id)),
    toggleItem: () => dispatch(patchThenToggleItem(id, task.id, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(SubListItem);
