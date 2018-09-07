const postItem = (taskId, text, userId) => fetch(`/users/${userId}/tasks/${taskId}/items`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ text }),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Post failed');
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

const requestDelete = (itemId, taskId, userId) => fetch(`/users/${userId}/tasks/${taskId}/items/${itemId}`, {
  method: 'DELETE',
})
  .then((response) => {
    if (response.status !== 200) throw new Error('Delete failed');
  });

const removeItem = (itemId, taskId) => ({
  type: 'REMOVE_SUB_LIST_ITEM',
  itemId,
  taskId,
});

export const deleteThenRemoveItem = (itemId, taskId, userId) => (dispatch) => {
  requestDelete(itemId, taskId, userId)
    .then(
      () => dispatch(removeItem(itemId, taskId)),
      error => alert(error),
    );
};
