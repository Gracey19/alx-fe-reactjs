import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
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
      
      {/* Input Form */}
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Rendering the List (Updated with Checkbox and Delete Button) */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* NEW: Checkbox input to satisfy the Toggle Test */}
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}
            />
            {/* Conditional style/class can be added here based on todo.completed */}
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;