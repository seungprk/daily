import React from 'react';
import PropTypes from 'prop-types';
import ItemDisplayContainer from '../ItemDisplay/container';
import ItemListContainer from '../ItemList/container';

const TaskListItem = ({ task }) => (
  <div>
    <ItemDisplayContainer task={task} />
    <ItemListContainer task={task} />
  </div>
);

TaskListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TaskListItem;
