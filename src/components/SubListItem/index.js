import React from 'react';

const SubListItem = ({ text, completed, isEdit, deleteItem, toggleItem }) => (
  <div>
    {completed ? 'CROSSED OUT' : ''}
    {text}
    <button type="button" onClick={toggleItem}>
      Done
    </button>
    {isEdit ? (
      <button type="button" onClick={deleteItem}>
        Delete
      </button>
    ) : null}
  </div>
);

export default SubListItem;
