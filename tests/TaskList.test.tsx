import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import { Task } from '../src/interfaces/Task';

describe('TaskList Component', () => {
  test('renders task list', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', description: 'Description 1', completed: false },
    ];
    render(
      <TaskList
        tasks={tasks}
        onAddTask={() => {} }
        onEditTask={() => {} }
        onDeleteTask={() => {} }
        onCompleteTask={() => {} }
      />
    );
    expect(screen.getByText('Task 1')).toBeInTheDocument();
  });
});