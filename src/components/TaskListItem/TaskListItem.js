import React from 'react';
import PropTypes from 'prop-types';
import './TaskListItem.css';

const Display = (props) => {
  const {
    task,
    toggleTask,
    toggleEdit,
    deleteTask,
  } = props;

  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {task.text}
      </span>
      <button type="button" onClick={() => toggleTask(task)}>
        Done
      </button>
      <button type="button" onClick={() => toggleEdit(task.id)}>
        Edit
      </button>
      <button type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

const Edit = (props) => {
  const {
    task,
    toggleEdit,
  } = props;

  const textClass = task.completed ? 'task-list-item--done' : '';
  return (
    <div>
      <span className={textClass}>
        {`EDITING: ${task.text}`}
      </span>
      <span className={textClass}>
        {`TYPE: ${task.type}`}
      </span>
      <button type="button" onClick={() => toggleEdit(task.id)}>
        Done
      </button>
    </div>
  );
};

const TaskListItem = (props) => {
  const { task } = props;
  if (task.isEdit) return <Edit {...props} />;
  return <Display {...props} />;
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

Display.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

Edit.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleEdit: PropTypes.func.isRequired,
};

export default TaskListItem;
