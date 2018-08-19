/* eslint no-alert: 0 */

const postUser = (username, email, password) => fetch('/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ username, email, password }),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Post failed');
    return response.json();
  });

const setUser = (user) => {
  const action = {
    type: 'SET_USER',
    user,
  };
  return action;
};

export const postThenSetUser = (username, email, password) => (dispatch) => {
  const user = {
    username,
    email,
    password,
  };

  return postUser(username, email, password)
    .then(
      () => dispatch(setUser(user)),
      error => alert(error),
    );
};
