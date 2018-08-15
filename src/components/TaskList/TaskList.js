import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';

class TaskList extends React.Component {
  componentDidMount() {
    const { loadTasks } = this.props;
    loadTasks();
  }

  render() {
    const { tasks, toggleTask, deleteTask } = this.props;
    return tasks.map(task => (
      <TaskListItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    ));
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  loadTasks: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
