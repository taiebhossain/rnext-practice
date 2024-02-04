/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Example7({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 Avoid: The onChange handler runs too late
  // useEffect(() => {
  //   console.log('rendering...');
  //   onChange(isOn);
  // }, [isOn, onChange]);

  // function handleClick() {
  //   console.log('rendering...');
  //   setIsOn(!isOn);
  // }

  function updateToggle(nextIsOn) {
    // ✅ Good: Perform all updates during the event that caused them
    console.log('updating all...');
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  }
  function handleClick() {
    updateToggle(!isOn);
  }

  return (
    <>
      <button onClick={handleClick}>Toggle</button>
    </>
  );
}
