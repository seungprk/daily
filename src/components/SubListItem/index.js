import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const SubListItem = (props) => {
  const {
    text,
    completed,
    deleteItem,
    toggleItem,
  } = props;
  const textClass = completed ? 'sub-list-item--done' : '';

  return (
    <div>
      <span className={textClass}>
        {`- ${text}`}
      </span>
      <button type="button" onClick={toggleItem}>
        Done
      </button>
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

SubListItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default SubListItem;
