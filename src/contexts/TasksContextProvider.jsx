/* eslint-disable react/prop-types */
import { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { initialTasks } from '../data/data';
import { taskReducer } from '../reducers/taskReducer';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TasksContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
