import useOnlineStatus from './hooks/useOnlineStatus';

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveBtn() {
    console.log('✅ Progress saved');
  }
  return (
    <button
      className='disabled:opacity-50'
      disabled={!isOnline}
      onClick={handleSaveBtn}
    >
      {isOnline ? 'Save Progress' : 'Reconnecting'}
    </button>
  );
}
