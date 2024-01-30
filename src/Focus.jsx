import { useRef } from 'react';

export default function Focus() {
  const inputRef = useRef(null);

  function handleRef() {
    inputRef.current.focus();
  }
  return (
    <>
      <input type='text' name='' ref={inputRef} />
      <button onClick={handleRef}>Click to focus</button>
    </>
  );
}
