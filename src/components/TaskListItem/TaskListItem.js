import React from 'react';
import PropTypes from 'prop-types';

const TaskListItem = ({ text }) => (
  <p>
    {text}
  </p>
);

TaskListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TaskListItem;
