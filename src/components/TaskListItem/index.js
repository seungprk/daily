import React from 'react';
import PropTypes from 'prop-types';
import ItemEditContainer from '../ItemEdit/container';
import ItemDisplayContainer from '../ItemDisplay/container';
import ItemRepeatContainer from '../ItemRepeat/container';
import ItemListContainer from '../ItemList/container';

const TaskListItem = ({ task }) => (
  <div>
    {task.isEdit ? <ItemEditContainer task={task} /> : <ItemDisplayContainer task={task} />}
    {task.type.name === 'repeat' ? <ItemRepeatContainer task={task} /> : null}
    {task.type.name === 'list' ? <ItemListContainer task={task} /> : null}
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
