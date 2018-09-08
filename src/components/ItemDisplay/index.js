import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemDisplay = (props) => {
  const {
    task,
    toggleTask,
    deleteTask,
  } = props;

  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {task.text}
      </span>
      <span>
        {`${task.completed} / ${task.repeat}`}
      </span>
      <button type="button" onClick={toggleTask}>
        Done
      </button>
      <button type="button" onClick={deleteTask}>
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
  deleteTask: PropTypes.func.isRequired,
};

export default ItemDisplay;
