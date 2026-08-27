import React, { FC } from 'react';
import { Task } from '../interfaces/Task';
import { useTasks } from '../hooks/useTasks';

interface TaskListProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onEditTask: (id: string, task: Task) => void;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onAddTask, onEditTask, onDeleteTask, onCompleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => onEditTask(task.id, task)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          <button onClick={() => onCompleteTask(task.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;