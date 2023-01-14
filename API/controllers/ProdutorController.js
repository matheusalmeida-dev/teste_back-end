const { sequelize } = require('../models') // Importa o módulo do sequelize para usar querys raw
const database = require('../models') // Importa os modelos das tabelas do BD através da ORM

class ProdutorController { // Controla funções relacionadas aos Produtores
    static async getAllProdutor(req, res) { // Retorna todos os Produtores
        try{
            const query = await database.Produtores.findAll({
                attributes: ['idProdutor', 'nomeProdutor', 'cpfProdutor']
            }) // Query que consulta todos os registros de Produtor

            return res.status(200).json(query) // Retorna status de sucesso e a query em formato json
        } catch(error) {
            return res.status(500).json(error.message) // Retorna erro e a descrição
        }
    }

    static async getProdutorByID(req, res) { // Consulta um Produtor por seu ID
        const { idProdutor } = req.params // Pega o ID passado como parâmetro

        try{
            const query = await database.Produtores.findOne({
                attributes: ['idProdutor', 'nomeProdutor', 'cpfProdutor'],
                where: {
                    idProdutor: Number(idProdutor)
                }
            }) // Query que consulta o Produtor que corresponde ao ID fornecido
            
            return res.status(200).json(query)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createProdutor(req, res) { // Insere um novo Produtor no BD
        const newEntry = req.body // Dados do novo Produtor
        try {
            await sequelize.query(
                `INSERT INTO Produtores (nomeProdutor, cpfProdutor)
                VALUES ('${newEntry.nomeProdutor}', '${newEntry.cpfProdutor}');`
                ) // Query raw para inserir Produtor no BD
            const query = await database.Produtores.findOne({
                attributes: ['idProdutor', 'nomeProdutor', 'cpfProdutor'],
                where: {
                    nomeProdutor: newEntry.nomeProdutor,
                    cpfProdutor: newEntry.cpfProdutor
                }
                }) // Query que consulta o Produtor criado para feedback
            
            
            return res.status(200).json(query) // Retorna a query com o novo Produtor
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateProdutor(req, res) { // Atualiza um registro de Produtor
        const { idProdutor } = req.params // ID do Produtor a ser atualizado
        const newEntry = req.body // Dados do Produtor a serem atualizados
        try {
            await sequelize.query(
                `UPDATE Produtores
                SET nomeProdutor = '${newEntry.nomeProdutor}', cpfProdutor = '${newEntry.cpfProdutor}'
                WHERE idProdutor=${idProdutor};`
                ) // Query raw para atualizar Produtor no BD
            const query = await database.Produtores.findOne({
                attributes: ['idProdutor', 'nomeProdutor', 'cpfProdutor'],
                where: {
                    nomeProdutor: newEntry.nomeProdutor,
                    cpfProdutor: newEntry.cpfProdutor
                }
                }) // Query que consulta o Produtor atualizado para feedback
            
            
            return res.status(200).json(query)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deleteProdutor(req, res) { // Deleta um registro de Produtor do BD
        const { idProdutor } = req.params // ID do Produtor a ser deletado

        try{
            await database.Produtores.destroy({
                where: {
                    idProdutor: Number(idProdutor)
                }
            }) // Query que deleta o Produtor
            
            return res.status(200).json({
                mensagem: `Registro de ID ${idProdutor} deletado!`
            })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = ProdutorController