const { Router } = require('express')
const PropriedadeController = require('../controllers/PropriedadeController')

const router = Router()

router.get('/propriedade', PropriedadeController.getAllPropriedade) // Rota para consultar todos as Propriedade
router.get('/propriedade/:idPropriedade', PropriedadeController.getPropriedadeByID) // Rota para consultar Propriedade por ID
router.post('/propriedade', PropriedadeController.createPropriedade) // Rota para criar Propriedade no BD
router.put('/propriedade/:idPropriedade', PropriedadeController.updatePropriedade) // Rota para atualizar Propriedade
router.delete('/propriedade/:idPropriedade', PropriedadeController.deletePropriedade) // Rota para deletar Propriedade

module.exports = router