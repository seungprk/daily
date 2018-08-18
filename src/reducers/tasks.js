const tasks = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TASKS':
      return action.tasks;
    case 'ADD_TASKS':
      return [
        ...state,
        ...action.tasks,
      ];
    case 'TOGGLE_TASK':
      return state.map((task) => {
        if (task.id === action.id) return { ...task, completed: !task.completed };
        return task;
      });
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
};

export default tasks;
