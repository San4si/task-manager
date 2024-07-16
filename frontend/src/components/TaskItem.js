import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li>
      {task.title}
      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </li>
  );
};

export default TaskItem;
