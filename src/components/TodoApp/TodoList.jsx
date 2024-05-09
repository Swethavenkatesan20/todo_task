import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, handleStatusChange, deleteTodo }) => {
  return (
    <div className="row">
      {todos.map((todo, index) => (
        <div className="col-md-4" key={index}>
          <TodoCard todo={todo} handleStatusChange={(status) => handleStatusChange(index, status)} deleteTodo={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
