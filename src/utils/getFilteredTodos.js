export function getFilteredTodos(todos, text) {
  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(text.toLowerCase()),
  );
  return filtered;
}
