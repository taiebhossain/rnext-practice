/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { createConnection } from './connection';

// const serverUrl = 'https://localhost:1234';
export default function ChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
    // console.log(`Connecting to ${roomId}`);
    const connection = createConnection(roomId, serverUrl);
    connection.connect();

    return () => {
      // console.log(`Disconnecting from ${roomId}`);
      console.log('clean up...');
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  // console.log('Rendering...');
  return (
    <>
      <h1 className='text-4xl mt-10'>
        Welcome to the <span className='text-yellow-500'>{roomId}</span>
        {''} room
      </h1>
    </>
  );
}
