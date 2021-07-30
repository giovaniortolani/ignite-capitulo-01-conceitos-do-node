<h2 align="center">Ignite by Rocketseat - Desafio Capítulo 1</h2>

___




<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#arrow_forward-instalação">Instalação</a>&nbsp;|&nbsp;
  <a href="#seedling-utilização">Utilização</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#computer-breve-descrição-da-api">Breve descrição da API</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___


## :information_source: Sobre

Uma aplicação para gerenciamento de tarefas (i.e. to-dos) de pessoas.

Realiza a criação de um usuário bem como o CRUD dos to-dos.

## :arrow_forward: Instalação

Use o gerenciador de pacotes [yarn](https://yarnpkg.com/) para instalar as dependências.

```bash
yarn install
```
ou
```bash
yarn
```

## :seedling: Utilização

Para rodar a aplicação na porta 3333 do _localhost_ utilize:
```bash
yarn dev
```

Para rodar os testes utilize:

```bash
yarn test
```

## :computer: Breve descrição da API

### POST `/users`

Cadastra um novo usuário e retorna o usuário criado, em caso de sucesso.

A rota deve receber `name` e `username` dentro do _body_ da requisição no formato JSON.
```jsx
{ 
	name: 'John Doe', 
	username: 'johndoe123', 
}
```

### GET `/todos`

Retorna um array com os to-dos associados a um usuário.

O `username` do usuário deve ser enviado como o header `username` na requisição. 

### POST `/todos`

Cadastra um to-do para um determinado usuário e retorna o to-do criado, em caso de sucesso.

A rota deve receber `title` e `deadline` dentro do _body_ da requisição no formato JSON.

O `username` do usuário deve ser enviado como o header `username` na requisição.

```jsx
{ 
	title: 'Something to do',
	deadline: '2021-04-31' // AAAA-MM-DD
}
```

### PUT `/todos/:id`

Altera o `title` e `deadline` de um to-do associado a um usuário.

O `username` do usuário deve ser enviado como o header `username` na requisição e o `id` do to-do deve ser passado nos parâmetros da rota.

A rota deve receber os novos `title` e `deadline` dentro do _body_ da requisição no formato JSON.

```jsx
{ 
	title: 'Something to do',
	deadline: '2021-04-31' // AAAA-MM-DD
}
```

### PATCH `/todos/:id/done`

Marca um to-do como concluído para um determinado usuário.

O `username` do usuário deve ser enviado como o header `username` na requisição e o `id` do to-do deve ser passado nos parâmetros da rota.

### DELETE `/todos/:id`

Exclui um to-do associado a um usuário.

O `username` do usuário deve ser enviado como o header `username` na requisição e o `id` do to-do deve ser passado nos parâmetros da rota.

## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- NodeJS
- Express
- Jest
- Supertest
- Nodemon
- uuid


## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
