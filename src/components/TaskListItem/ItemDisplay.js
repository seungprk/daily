import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

const getWidget = (type) => {
  if (type === 'counter') {
    return (
      <span>
        3 / 5
      </span>
    );
  }
  if (type === 'list') {
    return (
      <div>
        <div>Do Thing A</div>
        <div>Do Thing B</div>
        <div>Do Thing C</div>
      </div>
    );
  }
  return null;
};

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
      {getWidget(task.type)}
    </div>
  );
};

ItemDisplay.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ItemDisplay;
