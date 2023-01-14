const { Router } = require('express')
const LoginController = require('../controllers/LoginController')

const router = Router()

router.get('/', LoginController.loginCheck) // Rota index padrão
router.get('/logout', LoginController.logout) // Rota de Logout
router.post('/', LoginController.login) // Rota de Login com o método POST

module.exports = router