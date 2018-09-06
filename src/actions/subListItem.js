const postItem = (taskId, text, userId) => fetch(`/users/${userId}/tasks/${taskId}/items`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ text }),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Put failed');
    return response.json();
  });

export const updateItem = (taskId, itemId, text) => {
  const action = {
    type: 'UPDATE_SUB_LIST_ITEM',
    taskId,
    itemId,
    text,
  };
  return action;
};

export const postThenAddItem = (taskId, text, userId) => (dispatch) => {
  postItem(taskId, text, userId)
    .then(
      itemId => dispatch(updateItem(taskId, itemId, text)),
      error => alert(error),
    );
};
