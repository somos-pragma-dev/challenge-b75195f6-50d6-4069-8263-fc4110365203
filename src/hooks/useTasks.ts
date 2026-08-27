import { useState } from 'react';
import { Task } from '../interfaces/Task';

interface UseTasks {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

export const useTasks = (): UseTasks => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id: string, task: Task) => {
    setTasks(tasks.map(t => (t.id === id? {...t,...task } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id!== id));
  };

  const completeTask = (id: string) => {
    setTasks(tasks.map(t => (t.id === id? {...t, completed: true } : t)));
  };

  return { tasks, addTask, editTask, deleteTask, completeTask };
};