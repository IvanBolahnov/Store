const Router = require('express')
const router = new Router()
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

const BrandController = require('../controllers/brandController')

router.post('/',checkRoleMiddleware('ADMIN') , BrandController.create)
router.get('/', BrandController.getAll)

module.exports = router