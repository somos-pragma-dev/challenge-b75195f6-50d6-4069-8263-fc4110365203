import React, { FC } from 'react';
import TaskList from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

const Home: FC = () => {
  const { tasks, addTask, editTask, deleteTask, completeTask } = useTasks();

  const handleAddTask = () => {
    const newTask: Task = { id: '1', title: 'New Task', description: 'Task description', completed: false };
    addTask(newTask);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <TaskList
        tasks={tasks}
        onAddTask={addTask}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
};

export default Home;