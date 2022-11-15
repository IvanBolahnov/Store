const {Type} = require('../models/models')
const ApiError = require('../error/apiError')

class TypeController {
  async create (req, res, next) {
    const {name} = req.body
    
    if (!name) {
      return next(ApiError.badRequest('Не задано имя типа'))
    }
    
    const type = await Type.create({name})
    return res.status(200).json(type)
  }

  async getAll (req, res) {
    const types = await Type.findAll()

    return res.status(200).json(types)
  }
}

module.exports = new TypeController()