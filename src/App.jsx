import { useState } from 'react';
import ChatRoom from './components/chat/Chatroom';

export default function App() {
  const [show, setShow] = useState(true);
  const [room, setRoom] = useState('General');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  return (
    <>
      <label htmlFor=''>
        Select the chat room:{' '}
        <select
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className='bg-slate-900 border rounded px-4 py-2'
        >
          {' '}
          <option value='General'>General</option>
          <option value='Travel'>Travel</option>
          <option value='Music'>Music</option>
        </select>
      </label>
      <div className='mb-10'></div>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <div className='mb-10'></div>
      <button
        className={`mb-10 ${show ? 'red' : 'green'}`}
        onClick={() => setShow(!show)}
      >
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={room} serverUrl={serverUrl} />}
    </>
  );
}
