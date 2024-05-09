import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleStatusChange = (index, status) => {
    const updatedTodos = [...todos];
    updatedTodos[index].status = status;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => filter === 'all' || todo.status === filter);

  return (
    <div className="container-fluid" style={{ backgroundColor: '#E6F7FF', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
              <h1 className="text-center">Todo App</h1>
              <TodoForm addTodo={addTodo} />
              <TodoFilter filter={filter} setFilter={setFilter} />
              <TodoList todos={filteredTodos} handleStatusChange={handleStatusChange} deleteTodo={deleteTodo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
