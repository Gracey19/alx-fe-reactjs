import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            addTodo(input.trim());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                data-testid="todo-input" // Needed for testing
                placeholder="Add a new task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                type="submit" 
                data-testid="add-button" // Needed for testing
            >
                Add
            </button>
        </form>
    );
};

export default AddTodoForm;

