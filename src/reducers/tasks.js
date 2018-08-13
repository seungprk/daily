const tasks = (state = ['Task A', 'Task B', 'Task C'], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task,
      ];
    default:
      return state;
  }
};

export default tasks;
