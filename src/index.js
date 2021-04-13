const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checkIfuserNameAlreadyExists(username) {
  return users.find((user) => user.username === username);
}

// Middleware
function checksIfUserAccountExists(request, response, next) {
  const { username } = request.headers;

  const user = checkIfuserNameAlreadyExists(username);
  if (!user) {
    return response.status(404).json({ error: 'Mensagem do erro' });
  }

  request.user = user;
  next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userNameAlreadyExists = checkIfuserNameAlreadyExists(username);
  if (userNameAlreadyExists) {
    return response.status(400).json({
      error: 'Mensagem do erro',
    });
  }

  const user = {
    id: uuidv4(),
    name,
    username,
    todos: [],
  };
  users.push(user);

  return response.status(201).json(user);
});

app.get('/todos', checksIfUserAccountExists, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksIfUserAccountExists, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksIfUserAccountExists, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksIfUserAccountExists, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksIfUserAccountExists, (request, response) => {
  // Complete aqui
});

module.exports = app;
