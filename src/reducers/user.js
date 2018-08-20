const users = (state = { id: null }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return state;
  }
};

export default users;
