import { render, screen, fireEvent } from '@testing-library/react';
// Import this to enable expect(...).toHaveStyle(), etc.
import '@testing-library/jest-dom'; 

// CRITICAL FIX 1: Correct the import path to the new 'components' folder
import TodoList from '../components/TodoList';

// CRITICAL FIX 2: Use the required describe block and specific test names
describe('TodoList Component', () => {
    
  test('renders TodoList component', () => {
    render(<TodoList />);
    // Checks for the heading 'My Tasks'
    expect(screen.getByText('My Tasks')).toBeInTheDocument(); 
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    // Checks for the 3 hardcoded initial items defined in the component
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    // CRITICAL FIX 3: Use data-testid selector for the input and button
    const input = screen.getByTestId('todo-input');
    const button = screen.getByTestId('add-button');
    const taskName = 'New Test Task';

    fireEvent.change(input, { target: { value: taskName } });
    fireEvent.click(button);

    expect(screen.getByText(taskName)).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    // CRITICAL FIX 4: Uses the data-testid from the <span> element
    const todoTexts = screen.getAllByTestId('todo-text');
    const firstTodo = todoTexts[0];
    
    // Find the closest list item to check the style change
    const firstTodoItem = firstTodo.closest('li'); 

    expect(firstTodoItem).toHaveStyle('text-decoration: none');
    
    // Clicks the span to toggle the state
    fireEvent.click(firstTodo); 
    
    expect(firstTodoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    // CRITICAL FIX 5: Uses the data-testid for the delete button
    const deleteButtons = screen.getAllByTestId('delete-button');
    
    // Check that one of the initial items is present
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    // Click the delete button for the first item
    fireEvent.click(deleteButtons[0]);
    
    // Item should be gone
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});

