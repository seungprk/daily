import React from 'react';
import PropTypes from 'prop-types';

const ItemRepeat = ({ task, updateInput }) => {
  let completed = '';
  let repeat = '';
  if (task.type.data) {
    completed = task.type.data.completed || '';
    repeat = task.type.data.repeat || '';
  }

  if (task.isEdit) {
    return (
      <span>
        <input id="completed" type="number" value={completed} onChange={updateInput} />
        <input id="repeat" type="number" value={repeat} onChange={updateInput} />
      </span>
    );
  }
  return (
    <span>
      {completed}
      /
      {repeat}
    </span>
  );
};

ItemRepeat.propTypes = {
  task: PropTypes.shape({
    isEdit: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      data: PropTypes.shape({
        completed: PropTypes.string.isRequired,
        repeat: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  updateInput: PropTypes.func.isRequired,
};

export default ItemRepeat;
