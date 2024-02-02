/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { fetchComments } from '../utils/fetchComments';

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  // side effects
  useEffect(() => {
    let ignore = false;
    console.log('effecting...');

    async function startFetching() {
      console.log('fetching...');
      const data = await fetchComments(postId);
      if (!ignore) {
        console.log('Setting...');
        setComments(data);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);
  return (
    <ol>
      {comments.map((item) => (
        <li key={item.id}>{item.body}</li>
      ))}
    </ol>
  );
}
