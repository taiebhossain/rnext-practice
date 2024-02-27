import { useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const LoginForm = () => {
  const user = { email: 'testoneworking@gmail.com', password: '12345678' };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    const found = user.email === data.email && user.password === data.password;
    console.log(found);

    if (!found) {
      console.log('Not found');
      setError('root.random', {
        type: 'random',
        message: `User with email ${data.email} is not found!!!`,
      });
    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <form className='w-[25%] max-w-sm' onSubmit={handleSubmit(onSubmit)}>
        <FieldSet label='Welcome Back...😊'>
          <Field label='Email' error={errors.email}>
            <input
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              {...register('email', { required: 'Email is required.' })}
              type='email'
              name='email'
              id='email'
              placeholder='Enter email address'
            />
          </Field>
          <Field label='Password' error={errors.password}>
            <input
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 8,
                  message: 'Your password must be at least 8 characters.',
                },
              })}
              type='password'
              name='password'
              id='password'
              placeholder='Enter Password'
            />
          </Field>
        </FieldSet>
        <p className='text-sm text-red-500'>{errors?.root?.random?.message}</p>

        <Field>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
