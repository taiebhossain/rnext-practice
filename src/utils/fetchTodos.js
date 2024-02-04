export async function fetchTodos() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos');
  return result.json();
}
