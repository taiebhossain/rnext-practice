import { useState } from 'react';

export default function Task({ task, onEdit, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  let textContent;
  if (isEdit) {
    textContent = (
      <>
        <input
          type='text'
          value={task.text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    textContent = (
      <>
        {task.text}
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={task.done}
          onChange={(e) => {
            onEdit({
              ...task,
              done: e.target.checked,
            });
          }}
        />

        {textContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </label>
    </li>
  );
}
