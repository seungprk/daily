import { connect } from 'react-redux';
import ItemList from '.';
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
    addItem: (text) => {
      const data = task.type.data || [];
      data.push({ text, completed: false });

      const changedTask = {
        ...task,
        type: {
          ...task.type,
          data,
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
)(ItemList);
