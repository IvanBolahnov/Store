const {Brand} = require('../models/models')
const ApiError = require('../error/apiError')

class BrandController {
  async create (req, res, next) {
    const {name} = req.body

    if (!name) {
      return next(ApiError.badRequest('Не задано имя бренда'))
    }

    const brand = await Brand.create({name})
    return res.status(200).json(brand)
  }

  async getAll (req, res) {
    const brands = await Brand.findAll()

    return res.status(200).json(brands)
  }
}

module.exports = new BrandController()