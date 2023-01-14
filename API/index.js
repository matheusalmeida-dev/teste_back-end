const express = require('express') // Framework utilizado
const session = require('express-session') // Módulo utilizado para autenticação e gerenciamento de logins
const routes = require('./routes') // Rotas das requisições
var path = require('path') // Controle de path, principalmente usado pelo ORM utilizado Sequelize

const app = express() // Inicializa o app
const port = 3000 // Porta do localhost

app.use(session({
    secret: 'testebackend',
    resave: true,
    saveUninitialized: true
})) // Cria um hash de sessão para o usuário

app.use(express.urlencoded({
    extended: true
})) // Define opções de parsing utilizado pelo framework. O valor extended: true permite fazer o nest de objetos, facilitando
 // a comunicação com json

app.engine( 'html', require('ejs').renderFile) // Configura engine

app.set('view engine', 'html') // Seta engine

app.use(express.static(__dirname)); // Define diretório base

app.set('views', path.join(__dirname, './views')) // Define diretório das views

routes(app) // Exporta o app para o index de rotas

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`)) // Inicia o servidor na porta 3000

module.exports = app