import { useEffect, useState } from 'react';

export default function usePosts() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  async function fetchPost(id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const posts = await response.json();
      setPosts(posts);
      if (!response.ok) {
        throw new Error(`Failed to fetch posts ${response.status}`);
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchPost(1);
  });

  return {
    posts,
    error,
  };
}
