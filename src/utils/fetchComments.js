export async function fetchComments(postId) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=3`,
  );
  return result.json();
}
