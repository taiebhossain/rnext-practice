import { useState } from 'react';

export default function useFormInput(initialValue) {
  const [input, setInput] = useState(initialValue);
  const arr = [1, 3, 4, 9, 5];
  const res = useSorted(arr);
  console.log(res);

  function handleChange(event) {
    setInput(event.target.value);
  }

  const inputProps = {
    value: input,
    onChange: handleChange,
  };

  return inputProps;
}

function useSorted(items) {
  return items.slice().sort();
}
