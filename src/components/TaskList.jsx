/* eslint-disable react/prop-types */
import Task from './Task';

export default function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
}
