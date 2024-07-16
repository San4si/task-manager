# task-manager


Este é um projeto de um gerenciador de tarefas simples, desenvolvido com Node.js no backend e React no frontend, integrando com a API JSONPlaceholder para operações CRUD.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- **Node.js**: versão 12 ou superior
- **npm**: gerenciador de pacotes do Node.js

## Como Baixar e Rodar o Projeto

Siga os passos abaixo para baixar, instalar e rodar o projeto localmente:

### Clonar o Repositório

Clone o repositório do GitHub para sua máquina local:

```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager

### Configurar e Rodar o Backend

Instalar Dependências do Backend:

Navegue até o diretório do backend e instale as dependências:
cd backend
npm install

### Rodar o Servidor Backend:

Inicie o servidor backend:
npm start

O servidor backend estará disponível em http://localhost:3001.

### Configurar e Rodar o Frontend
Abra um novo terminal para configurar e rodar o frontend:

Navegar para o Diretório do Frontend:
cd ../frontend

### Instalar Dependências do Frontend:

Instale as dependências do frontend:
npm install

### Rodar o Servidor de Desenvolvimento do Frontend:

Inicie o servidor de desenvolvimento do frontend:
npm start
O frontend estará disponível em http://localhost:3000

### Acessar o Aplicativo
Após iniciar os servidores backend e frontend, você pode acessar o aplicativo Task Manager em seu navegador utilizando o endereço http://localhost:3000.

### Testando a API
Para testar as operações CRUD da API backend, você pode utilizar ferramentas como Postman ou simplesmente realizar requisições HTTP diretamente.

Exemplos de Endpoints da API
GET /todos: Retorna todas as tarefas.
POST /todos: Cria uma nova tarefa.
PUT /todos/
: Atualiza uma tarefa existente.
DELETE /todos/
: Remove uma tarefa existente.

### Contribuição
Se desejar contribuir com este projeto, siga os passos abaixo:

Faça um fork do repositório.
Crie uma branch com a sua feature: git checkout -b minha-feature.
Commit suas mudanças: git commit -m 'Adicionando nova feature'.
Push para a branch: git push origin minha-feature.
Abra um pull request no GitHub.
