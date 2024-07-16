import React, { useState } from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');

  const handleEditClick = (id, currentTitle) => {
    setEditedTaskId(id);
    setEditedTitle(currentTitle);
  };

  const handleSaveClick = () => {
    if (editedTaskId && editedTitle.trim() !== '') {
      onEdit(editedTaskId, { title: editedTitle });
      setEditedTaskId(null);
      setEditedTitle('');
    }
  };

  const handleCancelClick = () => {
    setEditedTaskId(null);
    setEditedTitle('');
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editedTaskId === task.id ? (
            <div className="task-edit">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <div className="button-group">
                <button onClick={handleSaveClick}>Salvar</button>
                <button onClick={handleCancelClick}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="task-view">
              <span>{task.title}</span>
              <div className="button-group">
                <button onClick={() => handleEditClick(task.id, task.title)}>Editar</button>
                <button onClick={() => onDelete(task.id)}>Excluir</button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
