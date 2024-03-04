import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Field from '../common/Field';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(formData) {
    console.log(formData);
    navigate('/');
  }
  return (
    <>
      <form
        className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label='Email' error={errors.email}>
          <input
            className='auth-input'
            {...register('email', { required: 'Email ID is required...' })}
            type='email'
            name='email'
            id='email'
          />
        </Field>
        <Field label='Password' error={errors.password}>
          <input
            className='auth-input'
            {...register('password', {
              required: 'Password is required...',
              minLength: {
                value: 8,
                message: 'Your password must be at least 8 characters',
              },
            })}
            type='password'
            name='password'
            id='password'
          />
        </Field>

        <button
          className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
          type='submit'
        >
          Login
        </button>
      </form>
    </>
  );
}
