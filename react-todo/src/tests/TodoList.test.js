// File: src/tests/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// --- CRITICAL FIX for 'Element type is invalid' ---
// Safely imports the component, handling different module export styles
import TodoListModule from '../TodoList'; 
const TodoList = TodoListModule.default || TodoListModule; 
// ----------------------------------------------------

// MANDATORY TEST 1: RENDER STRUCTURE
test('renders the initial empty list structure', () => {
  render(<TodoList />);
  expect(screen.getByText(/My Tasks/i)).toBeInTheDocument();
});

// MANDATORY TEST 2: ADDING A TODO ITEM (Passes with current TodoList.jsx logic)
test('allows a user to add a new todo item', () => {
  render(<TodoList />);
  
  const inputElement = screen.getByPlaceholderText(/Add a new task/i); 
  const addButton = screen.getByRole('button', { name: /Add/i }); 
  
  const taskName = "Buy groceries";
  
  // Simulate user actions
  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);
  
  // Assert outcome
  const listItem = screen.getByText(taskName);
  expect(listItem).toBeInTheDocument();
});

// MANDATORY TEST 3: DELETING A TODO ITEM (Requires Delete logic in TodoList.jsx)
test('allows a user to delete a todo item', () => {
  render(<TodoList />);

  // 1. Add an item first so we have something to delete
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByRole('button', { name: /Add/i });
  const taskName = "Task to delete";

  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);

  // Assert it is in the document initially
  expect(screen.getByText(taskName)).toBeInTheDocument();

  // 2. Locate the Delete button (must be named 'Delete' in the component)
  const deleteButton = screen.getByRole('button', { name: /Delete/i }); 
  
  // 3. Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // 4. Assertion: Check if the item is removed
  expect(screen.queryByText(taskName)).not.toBeInTheDocument();
});

// MANDATORY TEST 4: TOGGLING COMPLETION (Placeholder - Logic must be added next)
test('allows a user to toggle a todo item as complete', () => {
  render(<TodoList />);
  
  // 1. Add an item first
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByRole('button', { name: /Add/i });
  const taskName = "Task to toggle";

  fireEvent.change(inputElement, { target: { value: taskName } });
  fireEvent.click(addButton);

  const listItem = screen.getByText(taskName);

  // 2. Locate the toggle element (we'll use a checkbox input)
  // We assume the component will render a checkbox associated with the item
  const checkbox = screen.getByRole('checkbox'); 

  // Assertion 1: Check that the item starts as UNchecked (not completed)
  expect(checkbox).not.toBeChecked(); 
  
  // 3. Simulate clicking the toggle element (checking the box)
  fireEvent.click(checkbox);
  
  // Assertion 2: Check that the item is now checked (completed)
  expect(checkbox).toBeChecked();

  // You can also check for a class change here if you implement one (e.g., 'completed')
  // expect(listItem).toHaveClass('completed');
});



