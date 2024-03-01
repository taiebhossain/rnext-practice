import wrapPromise from '../hooks/wrapPromise';

export function fetchPosts(url) {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
}
