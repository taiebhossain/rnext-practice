import { useState } from 'react';

export default function AddTask({ onAdd }) {
  const [value, setValue] = useState('');
  return (
    <>
      <input
        placeholder='Add Task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setValue('');
          onAdd(value);
        }}
      >
        Add
      </button>
    </>
  );
}
