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

  let textClass = 'task-item__text';
  if (task.completed) textClass += ' task-item__text--done';
  return (
    <div>
      <div className="task-item">
        <button className="task-item__button task-item__button--border" type="button" onClick={toggleTask}>
          {task.completed && (
            <svg className="task-item__icon" viewBox="0 0 40 40">
              <path className="task-item__path" fill="none" d="M 10,25 L 15,30 M 15,30 L 30,15" />
            </svg>
          )}
        </button>
        <span className={textClass}>
          {task.text}
        </span>
        {hasCounter ? (
          <span className={textClass}>
            {`${completedCount} / ${task.subListItems.length}`}
          </span>
        ) : null}
        <button className="task-item__button" type="button" onClick={deleteTask}>
          <svg className="task-item__icon" viewBox="0 0 40 40">
            <path className="task-item__path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
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
