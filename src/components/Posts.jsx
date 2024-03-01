import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data = await response.json();
        if (response.ok) {
          setIsLoading(false);
          setPosts(data);
        } else {
          setIsLoading(false);
          setError(`404 Failed to fetch posts!!!`);
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    }
    fetchPosts();
  }, []);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && error) {
    content = <div>{error}</div>;
  } else {
    content = (
      <>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      <h2 className='uppercase font-bold'>All Posts:</h2>
      <div>{content}</div>
    </>
  );
}
