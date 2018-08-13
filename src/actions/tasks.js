let nextTaskId = 0;

export const addTask = (text) => {
  const action = {
    type: 'ADD_TASK',
    text,
    id: nextTaskId,
  };
  nextTaskId += 1;
  return action;
};

export const toggleTask = (id) => {
  const action = {
    type: 'TOGGLE_TASK',
    id,
  };
  return action;
};

export const deleteTask = (id) => {
  const action = {
    type: 'DELETE_TASK',
    id,
  };
  return action;
};
