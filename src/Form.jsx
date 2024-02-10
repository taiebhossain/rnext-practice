import useFormInput from './useFormInput';

export default function Form() {
  const firstnameProps = useFormInput('');
  const lastnameProps = useFormInput('');
  return (
    <div className='mt-10'>
      <label>
        First name: {''}
        <input {...firstnameProps} name='firstname' placeholder='name' />
      </label>
      <br />
      <label>
        Last name: {''}
        <input {...lastnameProps} name='lastname' />
      </label>
      <p>
        <b>
          Good morning {firstnameProps.value} {lastnameProps.value}
        </b>
      </p>
    </div>
  );
}
