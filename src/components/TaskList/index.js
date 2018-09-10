import React from 'react';
import PropTypes from 'prop-types';
import TaskListItemContainer from '../TaskListItem/container';
import './style.css';

const TaskList = ({ tasks }) => {
  const createTaskListItem = task => <TaskListItemContainer key={task.id} task={task} />;
  const activeTasks = tasks.filter(task => !task.completed).map(createTaskListItem);
  const completedTasks = tasks.filter(task => task.completed).map(createTaskListItem);
  return (
    <div className="task-list">
      {activeTasks}
      {completedTasks}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TaskList;
