import React from 'react';
import PropTypes from 'prop-types';

const ItemRepeat = ({ task, typeData, updateTypeData }) => {
  let completed = '';
  let repeat = '';
  if (typeData) {
    completed = typeData.completed || '';
    repeat = typeData.repeat || '';
  }

  if (task.isEdit) {
    return (
      <span>
        <input id="completed" type="number" value={completed} onChange={updateTypeData} />
        <input id="repeat" type="number" value={repeat} onChange={updateTypeData} />
      </span>
    );
  }
  return (
    <span>
      {completed} / {repeat}
    </span>
  );
};

ItemRepeat.propTypes = {
  task: PropTypes.shape({
    isEdit: PropTypes.bool.isRequired,
  }).isRequired,
  typeData: PropTypes.shape({
    completed: PropTypes.string.isRequired,
    repeat: PropTypes.string.isRequired,
  }).isRequired,
  updateTypeData: PropTypes.func.isRequired,
};

export default ItemRepeat;
