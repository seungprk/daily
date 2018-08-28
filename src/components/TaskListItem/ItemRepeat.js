import React from 'react';
import PropTypes from 'prop-types';

const ItemRepeat = ({ task }) => {
  if (task.isEdit) {
    return (
      <span>
        <input type="number" />
        <input type="number" />
      </span>
    );
  }
  return (
    <span>
      3 / 5
    </span>
  );
};

ItemRepeat.propTypes = {
  task: PropTypes.shape({
    isEdit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemRepeat;
