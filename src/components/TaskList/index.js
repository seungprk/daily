import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem';

const TaskList = ({ tasks, ...dispatchFns }) => {
  const createTaskListItem = task => (
    <TaskListItem
      key={task.id}
      task={task}
      {...dispatchFns}
    />
  );

  const activeTasks = tasks.filter(task => !task.completed).map(createTaskListItem);
  const completedTasks = tasks.filter(task => task.completed).map(createTaskListItem);
  return activeTasks.concat(completedTasks);
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskList;
