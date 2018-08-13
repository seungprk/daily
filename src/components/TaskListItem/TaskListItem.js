import React from 'react';
import PropTypes from 'prop-types';

const TaskListItem = ({
  id,
  text,
  toggleTask,
  deleteTask,
}) => (
  <div>
    {text}
    <button type="button" onClick={() => toggleTask(id)}>
      Done
    </button>
    <button type="button" onClick={() => deleteTask(id)}>
      Delete
    </button>
  </div>
);

TaskListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
