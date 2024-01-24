export function taskReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      draft.push({ id: action.id, text: action.text, done: false });
      break;
    }
    case 'edit': {
      const index = draft.findIndex((task) => task.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case 'deleted': {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`Unknown action, ${action.type}`);
    }
  }
}
