const Router = require('express')
const router = new Router()

const authMiddleware = require('../middleware/authMiddleware')
const UserController = require('../controllers/userController')

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)

module.exports = router