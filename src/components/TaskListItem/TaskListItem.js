import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

const TaskListItem = ({ task, toggleTask, deleteTask }) => {
  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {task.text}
      </span>
      <button type="button" onClick={() => toggleTask(task.id)}>
        Done
      </button>
      <button type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
