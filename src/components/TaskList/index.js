import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem';

const TaskList = ({ tasks }) => {
  const createTaskListItem = task => <TaskListItem key={task.id} task={task} />;
  const activeTasks = tasks.filter(task => !task.completed).map(createTaskListItem);
  const completedTasks = tasks.filter(task => task.completed).map(createTaskListItem);
  return (
    <div>
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
