import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';

class TaskList extends React.Component {
  componentDidMount() {
    const { user, loadTasks } = this.props;
    if (user) loadTasks();
  }

  render() {
    const { tasks, toggleTask, deleteTask } = this.props;
    const createTaskListItem = task => (
      <TaskListItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    );

    const activeTasks = tasks.filter(task => !task.completed).map(createTaskListItem);
    const completedTasks = tasks.filter(task => task.completed).map(createTaskListItem);
    return activeTasks.concat(completedTasks);
  }
}

TaskList.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  loadTasks: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
