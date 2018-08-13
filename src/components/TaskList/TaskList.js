import React from 'react';
import PropTypes from 'prop-types';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks }) => tasks.map(task => <TaskListItem text={task} />);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskList;
