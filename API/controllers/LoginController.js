const database = require('../models') // Importa os modelos das tabelas do BD através da ORM

class LoginController { // Controla funções relacionadas à login
    static async loginCheck(req, res) { // Checa se o usuário está logado e o redireciona pro dashboard caso esteja logado
        try{
            if(req.session.login){
                res.render('logado')
            }else{
                res.render('index')
            }
            return res.status(200)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async login(req, res) { // Realiza o login do usuário verificando no BD
        const loginData = req.body // Dados da requisição
        try{
            const loginQuery = await database.Usuarios.findOne({
                attributes: ['idUsuario'],
                where: {
                    nomeUsuario: loginData.user,
                    senhaUsuario: loginData.password
                }
            }) // Query da consulta no BD

            if(loginQuery != null){ // Cria a sessão do usuário caso as credenciais estejam corretas
                req.session.login = loginData.user
                res.render('logado')
            } else{
                res.render('index')
            }

            return res.status(200) // Retorna status de sucesso
        } catch(error) {
            return res.status(500).json(error.message) // Retorna a mensagem do erro
        }
    }

    static async logout(req, res) { // Faz o logout do usuário
        try{
            req.session.destroy() // Destrói a sessão atual do usuário
            res.redirect('/') // Redireciona para o index
            return res.status(200)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = LoginController