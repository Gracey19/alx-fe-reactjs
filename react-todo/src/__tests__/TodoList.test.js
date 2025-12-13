import React from 'react'; 
// 🟢 FIX: Added fireEvent for simulating clicks and changes
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    
  // 1. Initial Render Test
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('My Tasks')).toBeInTheDocument(); 
  });

  // 2. Initial State Test
  test('Ensure that the initial state (a few demo todos) is rendered.', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // 3. Test Adding Todos
  test('Test Adding Todos: verifies that a new todo can be added.', () => {
    render(<TodoList />);
    
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    const taskName = 'A new test task!';

    fireEvent.change(input, { target: { value: taskName } });
    fireEvent.click(button);

    expect(screen.getByText(taskName)).toBeInTheDocument();
  });

  // 4. Test Toggling Todos (FIXED)
  test('Test Toggling Todos: verifies that a todo item can be toggled.', () => {
    render(<TodoList />);
    
    // 1. Find the text/span element
    const todoTexts = screen.getAllByTestId('todo-text');
    const firstTodo = todoTexts[0]; // This is the <span> element with the style

    // 2. Check the initial state on the correct element (the <span>)
    expect(firstTodo).toHaveStyle('text-decoration: none'); 
    
    // 3. Simulate clicking the item text
    fireEvent.click(firstTodo); 
    
    // 4. Check the final state on the correct element (the <span>)
    expect(firstTodo).toHaveStyle('text-decoration: line-through');
  });

  // 5. Test Deleting Todos
  test('Test Deleting Todos: verifies that a todo item can be deleted.', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});

