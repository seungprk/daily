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
  .then((tasks) => {
    const isEditAddedTasks = tasks.map(task => ({ ...task, isEdit: false }));
    dispatch(loadTasks(isEditAddedTasks));
  });

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
    completed: false,
    date: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    isEdit: true,
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
  .then((response) => {
    if (response.status !== 204) throw new Error('Patch failed');
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

export const toggleEdit = (id) => {
  const action = {
    type: 'TOGGLE_EDIT',
    id,
  };
  return action;
};

export const patchThenToggleEdit = (task, userId) => dispatch => patchTask(task, userId)
  .then(
    () => dispatch(toggleEdit(task.id)),
    error => alert(error),
  );
