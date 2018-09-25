/* eslint no-alert: 0 */
const getTasks = userId => fetch(`users/${userId}/tasks`)
  .then((res) => {
    if (res.status !== 200) throw new Error('Get failed');
    return res.json();
  });

const loadTasks = (tasks) => {
  const action = {
    type: 'LOAD_TASKS',
    tasks,
  };
  return action;
};

export const getThenLoadTasks = userId => dispatch => getTasks(userId)
  .then((tasks) => {
    const tasksWithDateObj = tasks.map(task => ({ ...task, date: new Date(task.date) }));
    dispatch(loadTasks(tasksWithDateObj));
  });

const postTasks = (tasks, userId) => fetch(`/users/${userId}/tasks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(tasks),
})
  .then((res) => {
    if (res.status !== 201) throw new Error('Post failed');
    return res.json();
  });

const addTasks = (tasks) => {
  const action = {
    type: 'ADD_TASKS',
    tasks,
  };
  return action;
};

export const postThenAddTask = (text, userId) => (dispatch) => {
  const now = new Date(Date.now());
  const task = {
    text,
    completed: false,
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    subListItems: [],
  };

  const handleSuccess = (taskIds) => {
    [task.id] = taskIds;
    task.date = now;
    dispatch(addTasks([task]));
  };

  return postTasks([task], userId)
    .then(
      handleSuccess,
      error => alert(error),
    );
};

export const updateTask = (task) => {
  const action = {
    type: 'UPDATE_TASK',
    task,
  };
  return action;
};

const patchTask = (task, userId) => fetch(`/users/${userId}/tasks/${task.id}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(task),
})
  .then((res) => {
    if (res.status !== 204) throw new Error('Patch failed');
  });

export const patchThenUpdateTask = (task, userId) => (dispatch) => {
  patchTask(task, userId)
    .then(
      () => dispatch(updateTask(task)),
      error => alert(error),
    );
};

const deleteRequest = (taskId, userId) => fetch(`/users/${userId}/tasks/${taskId}`, {
  method: 'DELETE',
})
  .then((res) => {
    if (res.status !== 200) throw new Error('Delete failed');
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
