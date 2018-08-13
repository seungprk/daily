const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.task,
        },
      ];
    default:
      return state;
  }
};

export default tasks;
