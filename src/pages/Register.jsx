import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../auth/firebase';

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  async function handleRegister({ email, password }) {
    try {
      const response = await registerWithEmailAndPassword(email, password);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col'>
      <h2 className='text-3xl'>Login</h2>
      <form
        className='flex flex-col w-96'
        onSubmit={handleSubmit(handleRegister)}
      >
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
          Register
        </button>
      </form>
    </div>
  );
}
