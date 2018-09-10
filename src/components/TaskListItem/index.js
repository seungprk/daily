import React from 'react';
import PropTypes from 'prop-types';
import SubListContainer from '../SubList/container';
import './style.css';

const TaskListItem = (props) => {
  const {
    task,
    toggleTask,
    deleteTask,
  } = props;

  const hasCounter = task.subListItems.length > 0;
  const completedCount = task.subListItems.reduce((sum, item) => item.completed + sum, 0);

  let textClass = 'task-list-item__text';
  if (task.completed) textClass += '--done';
  return (
    <div>
      <div className="task-list-item">
        <span className={textClass}>
          {task.text}
        </span>
        {hasCounter ? (
          <span className={textClass}>
            {`${completedCount} / ${task.subListItems.length}`}
          </span>
        ) : null}
        <button type="button" onClick={toggleTask}>
          Done
        </button>
        <button type="button" onClick={deleteTask}>
          Delete
        </button>
        <SubListContainer task={task} />
      </div>
    </div>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskListItem;
