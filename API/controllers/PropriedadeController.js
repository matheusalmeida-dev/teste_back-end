const { sequelize } = require('../models') // Importa o módulo do sequelize para usar querys raw
const database = require('../models') // Importa os modelos das tabelas do BD através da ORM

class PropriedadeController { // Controla funções relacionadas aos Propriedades
    static async getAllPropriedade(req, res) { // Retorna todos as Propriedades
        try{
            const query = await database.Propriedades.findAll({
                attributes: ['idPropriedade', 'nomePropriedade', 'cadastroRural']
            }) // Query que consulta todos os registros de Propriedade

            return res.status(200).json(query) // Retorna status de sucesso e a query em formato json
        } catch(error) {
            return res.status(500).json(error.message) // Retorna erro e a descrição
        }
    }

    static async getPropriedadeByID(req, res) { // Consulta uma Propriedade por seu ID
        const { idPropriedade } = req.params // Pega o ID passado como parâmetro

        try{
            const query = await database.Propriedades.findOne({
                attributes: ['idPropriedade', 'nomePropriedade', 'cadastroRural'],
                where: {
                    idPropriedade: Number(idPropriedade)
                }
            }) // Query que consulta a Propriedade que corresponde ao ID fornecido
            
            return res.status(200).json(query)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPropriedade(req, res) { // Insere uma nova Propriedade no BD
        const newEntry = req.body // Dados da nova Propriedade
        try {
            await sequelize.query(
                `INSERT INTO Propriedades (nomePropriedade, cadastroRural)
                VALUES ('${newEntry.nomePropriedade}', '${newEntry.cadastroRural}');`
                ) // Query raw para inserir Propriedade no BD
            const query = await database.Propriedades.findOne({
                attributes: ['idPropriedade', 'nomePropriedade', 'cadastroRural'],
                where: {
                    nomePropriedade: newEntry.nomePropriedade,
                    cadastroRural: newEntry.cadastroRural
                }
                }) // Query que consulta a Propriedade criado para feedback
            
            return res.status(200).json(query) // Retorna a query com a nova Propriedade
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updatePropriedade(req, res) { // Atualiza um registro de Propriedade
        const { idPropriedade } = req.params // ID da Propriedade a ser atualizada
        const newEntry = req.body // Dados da Propriedade a serem atualizados
        try {
            await sequelize.query(
                `UPDATE Propriedades
                SET nomePropriedade = '${newEntry.nomePropriedade}', cadastroRural = '${newEntry.cadastroRural}'
                WHERE idPropriedade=${idPropriedade};`
                ) // Query raw para atualizar Propriedade no BD
            const query = await database.Propriedades.findOne({
                attributes: ['idPropriedade', 'nomePropriedade', 'cadastroRural'],
                where: {
                    nomePropriedade: newEntry.nomePropriedade,
                    cadastroRural: newEntry.cadastroRural
                }
                }) // Query que consulta a Propriedade atualizado para feedback
            
            return res.status(200).json(query)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletePropriedade(req, res) { // Deleta um registro de Propriedade do BD
        const { idPropriedade } = req.params // ID da Propriedade a ser deletada

        try{
            await database.Propriedades.destroy({
                where: {
                    idPropriedade: Number(idPropriedade)
                }
            }) // Query que deleta a Propriedade
            
            return res.status(200).json({
                mensagem: `Registro de ID ${idPropriedade} deletado!`
            })
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = PropriedadeController