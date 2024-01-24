import { useImmerReducer } from 'use-immer';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { initialTasks } from './data/data';
import { taskReducer } from './reducers/taskReducer';

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  function getNextId(data) {
    const maxId = data.reduce(
      (prev, current) => (prev && prev > current.id ? prev : current.id),
      0,
    );

    return maxId + 1;
  }

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      text,
      id: getNextId(tasks),
    });
  }
  function handleEditTask(task) {
    dispatch({
      type: 'edit',
      task,
    });
  }
  function handleDeleteTask(id) {
    dispatch({
      type: 'deleted',
      id,
    });
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
