import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TasksContextProvider from './contexts/TasksContextProvider';

export default function TaskApp() {
  return (
    <TasksContextProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TasksContextProvider>
  );
}
