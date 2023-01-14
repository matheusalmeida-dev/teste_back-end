const express = require('express')
const produtor = require('./produtorRoute') // Importa as rotas de Produtor
const propriedade = require('./propriedadeRoute') // Importa as rotas de Propriedade
const login = require('./loginRoute') // Importa as rotas de Login

module.exports = app => { // Passa as rotas para o app
    app.use(express.json(),
    login,
    produtor,
    propriedade)
}