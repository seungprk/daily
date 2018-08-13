import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks }) => tasks.map(task => <TaskListItem text={task} />);

export default TaskList;
