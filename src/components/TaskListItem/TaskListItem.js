import React from 'react';
import PropTypes from 'prop-types';
import ItemEdit from './ItemEdit';
import ItemDisplay from './ItemDisplay';
import ItemRepeat from './ItemRepeat';
import ItemList from './ItemList';
import './TaskListItem.css';

const TaskListItem = (props) => {
  const { task } = props;
  return (
    <div>
      {task.isEdit ? <ItemEdit {...props} /> : <ItemDisplay {...props} />}
      {task.type.name === 'repeat' ? <ItemRepeat {...props} /> : null}
      {task.type.name === 'list' ? <ItemList {...props} /> : null}
    </div>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    type: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
