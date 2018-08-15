/* eslint no-alert: 0 */
let nextTaskId = 0;

const postTask = (task, userId) => fetch(`/users/${userId}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(task),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Post failed');
  });

const addTask = (task) => {
  const action = {
    type: 'ADD_TASK',
    task,
  };
  return action;
};

export const postThenAddTask = (text, userId) => (dispatch) => {
  const task = {
    id: nextTaskId,
    text,
    timestamp: Date.now(),
    completed: false,
  };
  nextTaskId += 1;

  return postTask(task, userId)
    .then(
      () => dispatch(addTask(task)),
      error => alert(error),
    );
};

const patchToggle = (taskId, userId) => fetch(`/users/${userId}/tasks/${taskId}`, {
  method: 'PATCH',
})
  .then((response) => {
    if (response.status !== 204) throw new Error('Patch failed');
  });

const toggleTask = (id) => {
  const action = {
    type: 'TOGGLE_TASK',
    id,
  };
  return action;
};

export const patchThenToggleTask = (taskId, userId) => dispatch => patchToggle(taskId, userId)
  .then(
    () => dispatch(toggleTask(taskId)),
    error => alert(error),
  );

const deleteRequest = (taskId, userId) => fetch(`/users/${userId}/tasks/${taskId}`, {
  method: 'DELETE',
})
  .then((response) => {
    if (response.status !== 200) throw new Error('Delete failed');
  });

const deleteTask = (id) => {
  const action = {
    type: 'DELETE_TASK',
    id,
  };
  return action;
};

export const reqThenDeleteTask = (taskId, userId) => dispatch => deleteRequest(taskId, userId)
  .then(
    () => dispatch(deleteTask(taskId)),
    error => alert(error),
  );
