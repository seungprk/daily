import { connect } from 'react-redux';
import TaskList from '.';
import {
  updateTask,
  patchThenUpdateTask,
  reqThenDeleteTask,
  toggleEdit,
  patchThenToggleEdit,
} from '../../actions/tasks';

const mapStateToProps = (state, ownProps) => {
  const tasks = state.tasks.filter((task) => {
    const taskDateStr = new Date(task.date).toDateString();
    return taskDateStr === ownProps.targetDate.toDateString();
  });

  return {
    user: state.user,
    tasks,
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  const { user, tasks } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    tasks,
    toggleTask: (task) => {
      const changedTask = { ...task, completed: !task.completed };
      dispatch(patchThenUpdateTask(changedTask, user.id));
    },
    changeType: (type, task) => {
      const changedTask = { ...task, type };
      dispatch(updateTask(changedTask, user.id));
    },
    toggleEdit: (task, typeData) => {
      if (!task.isEdit) dispatch(toggleEdit(task.id));
      else {
        const mergedTask = {
          ...task,
          type: {
            name: task.type.name,
            data: typeData,
          },
        };
        console.log(mergedTask);
        dispatch(patchThenToggleEdit(mergedTask, user.id));
      }
    },
    deleteTask: taskId => dispatch(reqThenDeleteTask(taskId, user.id)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(TaskList);
