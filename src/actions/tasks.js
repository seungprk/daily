let nextTaskId = 0;

export const addTask = (task) => {
  const action = {
    type: 'ADD_TASK',
    task,
    id: nextTaskId,
  };
  nextTaskId += 1;
  return action;
};
