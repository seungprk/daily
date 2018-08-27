import React from 'react';
import PropTypes from 'prop-types';
import ItemEdit from './ItemEdit';
import ItemDisplay from './ItemDisplay';
import './TaskListItem.css';

const TaskListItem = (props) => {
  const { task } = props;
  if (task.isEdit) return <ItemEdit {...props} />;
  return <ItemDisplay {...props} />;
};

TaskListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
