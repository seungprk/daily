/* eslint no-alert: 0 */

const createUser = (username, email, password) => fetch('/users', {
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

export const createThenSetUser = (username, email, password) => (dispatch) => {
  const user = {
    username,
    email,
    password,
  };

  return createUser(username, email, password)
    .then(
      () => dispatch(setUser(user)),
      error => alert(error),
    );
};

const loginUser = (username, email, password) => fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ username, password }),
})
  .then((response) => {
    if (response.status !== 201) throw new Error('Post failed');
    return response.json();
  });

export const loginThenSetUser = (username, password) => (dispatch) => {
  const user = {
    username,
    password,
  };

  return loginUser(username, password)
    .then(
      () => dispatch(setUser(user)),
      error => alert(error),
    );
};
