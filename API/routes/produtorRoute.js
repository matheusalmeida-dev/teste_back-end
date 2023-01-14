const { Router } = require('express')
const ProdutorController = require('../controllers/ProdutorController')

const router = Router()

router.get('/produtor', ProdutorController.getAllProdutor) // Rota para consultar todos os Produtores
router.get('/produtor/:idProdutor', ProdutorController.getProdutorByID) // Rota para consultar Produtor por ID
router.post('/produtor', ProdutorController.createProdutor) // Rota para criar Produtor no BD
router.put('/produtor/:idProdutor', ProdutorController.updateProdutor) // Rota para atualizar Produtor
router.delete('/produtor/:idProdutor', ProdutorController.deleteProdutor) // Rota para deletar Produtor

module.exports = router