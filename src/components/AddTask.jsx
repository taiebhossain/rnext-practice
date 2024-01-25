import { useContext, useState } from 'react';
import {
  TasksContext,
  TasksDispatchContext,
} from '../contexts/TasksContextProvider';
import { getNextId } from '../utils/getNextId';

export default function AddTask() {
  const [text, setText] = useState('');
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder='Add Task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            text,
            id: getNextId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
