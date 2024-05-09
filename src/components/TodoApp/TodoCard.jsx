import React, { useState } from 'react';

const TodoCard = ({ todo, handleStatusChange, deleteTodo }) => {
  const [status, setStatus] = useState(todo.status);

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    handleStatusChange(newStatus);
  };

  // Define an array of colors
  const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2DFDB', '#C8E6C9', '#DCEDC8'];

  // Generate a random color index
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const cardColor = colors[randomColorIndex];

  return (
    <div className="card" style={{ marginBottom: '20px', backgroundColor: cardColor }}>
      <div className="card-body">
        <h5 className="card-title">{todo.taskName}</h5>
        <p className="card-text">{todo.description}</p>
        <select className="form-select mb-2" value={status} onChange={handleChange}>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
        <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
