import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from '../TodoList';
// ----------------------------------------------------

test('renders the initial empty list structure', () => {
  render(<TodoList />);
  expect(screen.getByText(/My Tasks/i)).toBeInTheDocument();
});

test('allows a user to add a new todo item', () => {
  render(<TodoList />);
  
  const inputElement = screen.getByPlaceholderText(/Add a new task/i); 
  const addButton = screen.getByRole('button', { name: /Add/i }); 
  
  const taskName = "Buy groceries";
  
  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);
  
  const listItem = screen.getByText(taskName);
  expect(listItem).toBeInTheDocument();
});

test('allows a user to delete a todo item', () => {
  render(<TodoList />);

  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByRole('button', { name: /Add/i });
  const taskName = "Task to delete";

  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);

  expect(screen.getByText(taskName)).toBeInTheDocument();

  const deleteButton = screen.getByRole('button', { name: /Delete/i }); 
  
  fireEvent.click(deleteButton);

  expect(screen.queryByText(taskName)).not.toBeInTheDocument();
});

test('allows a user to toggle a todo item as complete', () => {
  render(<TodoList />);
  
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByRole('button', { name: /Add/i });
  const taskName = "Task to toggle";

  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);

  const listItem = screen.getByText(taskName);

  const checkbox = screen.getByRole('checkbox'); 

  expect(checkbox).not.toBeChecked(); 
  
  fireEvent.click(checkbox);
  
  expect(checkbox).toBeChecked();

});



