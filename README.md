# task-manager

Task Manager App
Este é um projeto de um gerenciador de tarefas simples, desenvolvido com Node.js no backend e React no frontend, integrando com a API JSONPlaceholder para operações CRUD.

Como Baixar e Rodar o Projeto
Pré-requisitos
Node.js instalado (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Passos
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
Instale as dependências do backend:

bash
Copiar código
cd backend
npm install
Inicie o servidor backend:

bash
Copiar código
npm start
Abra outro terminal e navegue para a pasta do frontend:

bash
Copiar código
cd ../frontend
Instale as dependências do frontend:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento do frontend:

bash
Copiar código
npm start
Acesse o aplicativo em seu navegador:

Abra http://localhost:3000 para visualizar o frontend.

Testando a API
Para testar as operações CRUD da API backend, você pode utilizar ferramentas como Postman ou simplesmente realizar requisições HTTP diretamente.

Exemplos de Endpoints:
GET /todos: Retorna todas as tarefas.
POST /todos: Cria uma nova tarefa.
PUT /todos/
: Atualiza uma tarefa existente.
DELETE /todos/
: Remove uma tarefa existente.
Certifique-se de ajustar as URLs de acordo com o ambiente de desenvolvimento ou produção.
