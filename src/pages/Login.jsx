import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginWithEmailAndPassword } from '../auth/firebase';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  async function handleLogin({ email, password }) {
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className='flex flex-col'>
      <h2 className='text-3xl text-green-600 text-center'>Login</h2>
      <form className='flex flex-col w-96' onSubmit={handleSubmit(handleLogin)}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' {...register('email')} />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          {...register('password')}
        />
        <button className='bg-blue-600' type='submit'>
          Login
        </button>
      </form>
      {error && <p className='text-red-600 text-center'>{error}</p>}
    </div>
  );
}
