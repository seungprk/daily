import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
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
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
