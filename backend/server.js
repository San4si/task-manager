const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = 'https://jsonplaceholder.typicode.com';

app.use(express.json());
app.use(cors());

// Rotas
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
