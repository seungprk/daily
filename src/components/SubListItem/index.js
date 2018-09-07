import React from 'react';

const SubListItem = ({ text, completed, isEdit, deleteItem }) => (
  <div>
    {text}
    <button type="button">
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
