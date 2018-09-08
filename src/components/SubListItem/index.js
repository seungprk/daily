import React from 'react';
import './style.css';

const SubListItem = ({ text, completed, deleteItem, toggleItem }) => {
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

export default SubListItem;
