const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

// Helper
function checkIfuserNameAlreadyExists(username) {
  return users.find((user) => user.username === username);
}

/* Middlewares */
function checksIfUserAccountExists(request, response, next) {
  const { username } = request.headers;

  const user = checkIfuserNameAlreadyExists(username);
  if (!user) {
    return response.status(404).json({ error: 'User does not exist' });
  }

  request.user = user;

  next();
}

function checksIfTodoExists(request, response, next) {
  const {
    params: { id },
    user,
  } = request;

  const todo = user.todos.find((todo) => todo.id === id);
  if (!todo) {
    return response.status(404).json({ error: 'Todo does not exist' });
  }

  request.todo = todo;

  next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;

  const userNameAlreadyExists = checkIfuserNameAlreadyExists(username);
  if (userNameAlreadyExists) {
    return response.status(400).json({
      error: 'User already exists',
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
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksIfUserAccountExists, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: uuidv4(),
    title,
    deadline: new Date(deadline),
    done: false,
    created_at: new Date(),
  };
  user.todos.push(todo);

  return response.status(201).json(todo);
});

app.put(
  '/todos/:id',
  checksIfUserAccountExists,
  checksIfTodoExists,
  (request, response) => {
    const {
      todo,
      body: { title, deadline },
      params: { id },
    } = request;

    todo.title = title;
    todo.deadline = new Date(deadline);

    response.json(todo);
  }
);

app.patch(
  '/todos/:id/done',
  checksIfUserAccountExists,
  checksIfTodoExists,
  (request, response) => {
    const { todo } = request;

    todo.done = true;

    return response.json(todo);
  }
);

app.delete(
  '/todos/:id',
  checksIfUserAccountExists,
  checksIfTodoExists,
  (request, response) => {
    // Complete aqui
  }
);

module.exports = app;
