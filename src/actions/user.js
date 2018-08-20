/* eslint no-alert: 0 */
import { getThenLoadTasks } from './tasks';

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
  const handleSuccess = (user) => {
    dispatch(setUser(user));
    dispatch(getThenLoadTasks(user.id));
  };

  return createUser(username, email, password)
    .then(
      handleSuccess,
      error => alert(error),
    );
};

const loginUser = (username, password) => fetch('/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({ username, password }),
})
  .then((response) => {
    if (response.status !== 200) throw new Error('Login failed');
    return response.json();
  });

export const loginThenSetUser = (username, password) => (dispatch) => {
  const handleSuccess = (user) => {
    dispatch(setUser(user));
    dispatch(getThenLoadTasks(user.id));
  };

  return loginUser(username, password)
    .then(
      handleSuccess,
      error => alert(error),
    );
};

export const logOut = () => {
  const action = {
    type: 'SET_USER',
    user: null,
  };
  return action;
};

export const checkLogin = () => dispatch => fetch('/login')
  .then(res => res.json())
  .then((user) => {
    if (user) {
      dispatch(setUser(user));
      dispatch(getThenLoadTasks(user.id));
    }
  });
