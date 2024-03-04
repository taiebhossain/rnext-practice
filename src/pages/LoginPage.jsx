import { Link } from 'react-router-dom';
import AuthIllustration from '../components/AuthIllustration';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-deepDark py-8'>
      <div className='max-w-[1368px] flex-1'>
        <div className='container grid items-center gap-8 lg:grid-cols-2'>
          <AuthIllustration />
          <div className='card'>
            <LoginForm />
            <div className='py-4 lg:py-6'>
              <p className='text-center text-xs text-gray-600/95 lg:text-sm'>
                Don’t have account?
                <Link
                  className='text-white transition-all hover:text-lwsGreen hover:underline'
                  to='/register'
                >
                  Create New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
