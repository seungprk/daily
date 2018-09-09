import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemDisplay = (props) => {
  const {
    task,
    toggleTask,
    deleteTask,
  } = props;

  const hasCounter = task.subListItems.length > 0;
  const completedCount = task.subListItems.reduce((sum, item) => item.completed + sum, 0);

  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {task.text}
      </span>
      {hasCounter ? (
        <span className={textClass}>
          {`${completedCount} / ${task.subListItems.length}`}
        </span>
      ) : null}
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
