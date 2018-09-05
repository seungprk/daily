const putRepeat = (taskId, completed, repeat, userId) => fetch(`/users/${userId}/tasks/${taskId}/repeat`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ completed, repeat }),
})
  .then((response) => {
    if (response.status !== 204) throw new Error('Put failed');
  });

export const updateRepeat = (taskId, completed, repeat) => {
  const action = {
    type: 'UPDATE_REPEAT',
    taskId,
    completed,
    repeat,
  };
  return action;
};

export const putThenUpdateRepeat = (taskId, completed, repeat, userId) => (dispatch) => {
  putRepeat(taskId, completed, repeat, userId)
    .then(
      () => dispatch(updateRepeat(taskId, completed, repeat)),
      error => alert(error),
    );
};
