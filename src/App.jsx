import { Suspense } from 'react';
import { Loading } from './components/Loading';
import PostsWithSuspense from './components/PostsWithSuspense';

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <PostsWithSuspense />
    </Suspense>
  );
}
