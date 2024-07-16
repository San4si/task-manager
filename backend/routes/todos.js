const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'; 

// Rota para listar todas as tarefas
router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(BASE_URL);
    res.json(data);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    res.status(500).send('Erro ao listar tarefas');
  }
});

// Rota para buscar uma tarefa por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar tarefa por ID:', error);
    res.status(500).send('Erro ao buscar tarefa por ID');
  }
});

// Rota para adicionar uma nova tarefa
router.post('/', async (req, res) => {
  try {
    const { data } = await axios.post(BASE_URL, req.body);
    res.json(data);
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error);
    res.status(500).send('Erro ao adicionar tarefa');
  }
});

// Rota para editar uma tarefa pelo ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.put(`${BASE_URL}/${id}`, req.body);
    res.json(data);
  } catch (error) {
    console.error('Erro ao editar tarefa:', error);
    res.status(500).send('Erro ao editar tarefa');
  }
});

// Rota para excluir uma tarefa pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${BASE_URL}/${id}`);
    res.send('Tarefa excluída com sucesso');
  } catch (error) {
    console.error('Erro ao excluir tarefa:', error);
    res.status(500).send('Erro ao excluir tarefa');
  }
});

module.exports = router;
