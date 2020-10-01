const routes = require('express').Router();

const teste = require('./teste');

routes.post('/teste', teste);

module.exports = routes;