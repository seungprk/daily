import React from 'react';
import PropTypes from 'prop-types';

const ItemRepeat = ({ task, updateInput, saveRepeat }) => {
  let completed = '';
  let repeat = '';
  if (task.type.data) {
    completed = task.type.data.completed.toString() || '';
    repeat = task.type.data.repeat.toString() || '';
  }

  if (task.isEdit) {
    return (
      <span>
        <input id="completed" type="number" value={completed} onChange={updateInput} onBlur={saveRepeat} />
        <input id="repeat" type="number" value={repeat} onChange={updateInput} onBlur={saveRepeat} />
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
  saveRepeat: PropTypes.func.isRequired,
};

export default ItemRepeat;
