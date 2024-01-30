import Scroll from './Scroll';
import StopWatch from './StopWatch';

export default function TaskApp() {
  return (
    <div className='relative top-20 left-20'>
      <StopWatch />
      <Scroll />
    </div>
  );
}
