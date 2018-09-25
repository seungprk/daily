import React from 'react';
import PropTypes from 'prop-types';
import TaskListItemContainer from '../TaskListItem/container';
import './style.css';

const TaskList = ({ tasks }) => {
  const sortedTasks = tasks.map(task => <TaskListItemContainer key={task.id} task={task} />)
    .sort((a, b) => {
      const aCompleted = a.props.task.completed;
      const bCompleted = b.props.task.completed;
      if (aCompleted !== bCompleted) {
        return aCompleted - bCompleted;
      }
      return a.key - b.key;
    });

  return (
    <div className="task-list">
      {sortedTasks}
      {sortedTasks.length === 0 && (
        <div className="task-list__empty">
          No tasks for today!
        </div>
      )}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;
