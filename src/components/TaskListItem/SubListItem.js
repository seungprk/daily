import React from 'react';

const SubListItem = ({ text, completed, isEdit }) => (
  <div>
    {text}
    <button type="button">
      Done
    </button>
    {isEdit ? (
      <button type="button">
        Delete
      </button>
    ) : null}
  </div>
);

export default SubListItem;
