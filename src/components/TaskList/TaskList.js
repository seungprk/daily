import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => tasks.map(task => (
  <TaskListItem
    key={task.id}
    task={task}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
  />
));

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default TaskList;
