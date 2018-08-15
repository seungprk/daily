let nextTaskId = 0;

const postTask = task => fetch('/users/0/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(task),
})
  .then((response) => {
    if (response.status !== 301) throw new Error('Post failed');
  });

const addTask = (task) => {
  const action = {
    type: 'ADD_TASK',
    task,
  };
  return action;
};

export const postThenAddTask = text => (dispatch) => {
  const task = {
    id: nextTaskId,
    text,
    timestamp: Date.now(),
    completed: false,
  };
  nextTaskId += 1;

  return postTask(task)
    .then(
      () => dispatch(addTask(task)),
      (error) => alert(error),
    );
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
