import { useRef, useState } from 'react';

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const inervalId = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    inervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  let timePassed;
  if (startTime !== null && now !== null) {
    timePassed = (now - startTime) / 1000;
  }

  function handleEnd() {
    clearInterval(inervalId.current);
  }
  return (
    <div className='h-screen'>
      <h1 className='mb-5 text-2xl'>Time passed: {timePassed}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  );
}
