/* eslint no-alert: 0 */

const getTasks = userId => fetch(`users/${userId}/tasks`)
  .then(res => res.json());

const loadTasks = (tasks) => {
  const action = {
    type: 'LOAD_TASKS',
    tasks,
  };
  return action;
};

export const getThenLoadTasks = userId => dispatch => getTasks(userId)
  .then(tasks => dispatch(loadTasks(tasks)));

const postTasks = (tasks, userId) => fetch(`/users/${userId}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(tasks),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Post failed');
    return response.json();
  });

const addTasks = (tasks) => {
  const action = {
    type: 'ADD_TASKS',
    tasks,
  };
  return action;
};

export const postThenCopyTasks = (tasks, userId) => (dispatch) => {
  const now = new Date(Date.now());
  const newTasks = tasks.map(task => ({
    ...task,
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    completed: false,
  }));

  const handleSuccess = (taskIds) => {
    const idTasks = newTasks.map((task, index) => ({ ...task, id: taskIds[index] }));
    dispatch(addTasks(idTasks));
  };

  return postTasks(newTasks, userId)
    .then(
      handleSuccess,
      error => alert(error),
    );
};

export const postThenAddTask = (text, userId) => (dispatch) => {
  const now = new Date(Date.now());
  const task = {
    text,
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    completed: false,
  };

  const handleSuccess = (taskIds) => {
    [task.id] = taskIds;
    dispatch(addTasks([task]));
  };

  return postTasks([task], userId)
    .then(
      handleSuccess,
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