import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

const ItemDisplay = (props) => {
  const {
    task,
    toggleTask,
    toggleEdit,
    deleteTask,
  } = props;

  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {task.text}
      </span>
      <button type="button" onClick={() => toggleTask(task)}>
        Done
      </button>
      <button type="button" onClick={() => toggleEdit(task.id)}>
        Edit
      </button>
      <button type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

ItemDisplay.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ItemDisplay;
