import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemEdit = ({ task, toggleEdit }) => {
  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {`EDITING: ${task.text}`}
      </span>
      <button type="button" onClick={toggleEdit}>
        Done
      </button>
    </div>
  );
};

ItemEdit.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default ItemEdit;
