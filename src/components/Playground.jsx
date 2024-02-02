import { useEffect, useState } from 'react';

export default function Playground() {
  const [text, setText] = useState('a');

  // side effects && clear effects
  useEffect(() => {
    console.log(`🌿 ${text}`);

    const timeoutId = setTimeout(() => {
      console.log(`⏰ Schedule ${text} log`);
    }, 3000);

    // cleanup
    return () => {
      console.log(`🔥 Cancel ${text} log`);
      clearTimeout(timeoutId);
    };
  }, [text]);
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className='text-5xl mt-5'>{text}</p>
    </>
  );
}
