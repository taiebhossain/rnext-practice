import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../auth/firebase';

export default function Homepage() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <h1 className='w-10 text-5xl'>Homepage</h1>
      <h2 className='text-white'>Welcome {user.email}</h2>
    </div>
  );
}
