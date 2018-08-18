const users = (state = 0, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.userId;
    default:
      return state;
  }
};

export default users;
