import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/todos', { title, completed: false })
      .then(response => {
        if (typeof onTaskAdded === 'function') {
          onTaskAdded(response.data);
        }
        setTitle('');
      })
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova Tarefa"
        required
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddTask;
