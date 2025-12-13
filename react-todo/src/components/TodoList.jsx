import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

// Initialize the component state with a few todos for demonstration.
const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: false },
];

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos); 

    // Method for adding todos.
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    // Method for deleting todos.
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Method for toggling todos.
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div>
            <h2>My Tasks</h2> 
            
            {/* Renders the form and passes the addTodo method */}
            <AddTodoForm addTodo={addTodo} />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => toggleTodo(todo.id)}
                        />
                        
                        <span 
                            data-testid="todo-text" // Needed for testing
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTodo(todo.id)} 
                        >
                            {todo.text}
                        </span>

                        <button 
                            onClick={() => deleteTodo(todo.id)}
                            data-testid="delete-button" // Needed for testing
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

