const express = require('express');

const routes = require('./routes');

const app = express();

// GET, Post, Put, Delete
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisicao (oara criacao, edicao)
app.use(express.json());

app.use(routes);

app.listen(3333);
