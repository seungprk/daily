import React from 'react';
import PropTypes from 'prop-types';
import ItemEdit from '../ItemEdit';
import ItemDisplay from '../ItemDisplay';
import ItemRepeat from '../ItemRepeat';
import ItemList from '../ItemList';

const TaskListItem = ({ task }) => (
  <div>
    {task.isEdit ? <ItemEdit /> : <ItemDisplay />}
    {task.type.name === 'repeat' ? <ItemRepeat /> : null}
    {task.type.name === 'list' ? <ItemList /> : null}
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
