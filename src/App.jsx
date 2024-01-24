import { useState } from 'react';
import { initialTasks } from '../data/data';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function getNextId(data) {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0,
    );

    return maxId + 1;
  }

  function handleAddTask(value) {
    console.log(value);
    setTasks([...tasks, { id: getNextId(tasks), text: value, done: false }]);
  }
  function handleEditTask(task) {
    console.log('edit: ', task);
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTasks);
  }
  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
    </>
  );
}
