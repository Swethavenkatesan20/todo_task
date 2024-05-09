import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTodo({ taskName, description, status: 'not completed' });
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input type="text" className="form-control" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Todo</button>
    </form>
  );
};

export default TodoForm;
