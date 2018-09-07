import { connect } from 'react-redux';
import SubListItem from '.';
import { deleteThenRemoveItem } from '../../actions/subListItem';

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
    isEdit: task.isEdit,
    deleteItem: () => dispatch(deleteThenRemoveItem(id, task.id, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(SubListItem);
