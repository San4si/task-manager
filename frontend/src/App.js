import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importa o arquivo de estilos específicos do componente
import AddTask from './components/AddTask'; 
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const BASE_URL = 'http://localhost:3000/todos'; // Endpoint do backend

  const fetchTasks = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  const handleTaskAdded = async (newTask) => {
    try {
      const response = await axios.post(BASE_URL, newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const handleEdit = async (id, updatedTaskData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updatedTaskData);
      const updatedTasks = tasks.map(task => (task.id === id ? response.data : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao editar tarefa:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <AddTask onTaskAdded={handleTaskAdded} />
      <h2>Lista de Tarefas</h2>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
