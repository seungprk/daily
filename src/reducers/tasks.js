const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        },
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
