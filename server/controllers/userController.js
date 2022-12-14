const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const ApiError = require('../error/apiError')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role},
    process.env.SECRET_KEY, 
    {expiresIn: '24h', algorithm: 'HS256'})
}

class UserController {
  async registration (req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректрный Email или Password'))
    }
    const condidate = await User.findOne({where: {email}})
    if (condidate) {
      return next(ApiError.badRequest('Пользователь с таким Email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})
    const basket = await Basket.create({userId: user.id})

    const token = generateJWT(user.id, user.email, user.role)

    return res.status(200).json({token})
  }

  async login (req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})

    if (!user) {
      return next(ApiError.internal('Пользователь с таким Email не найден'))
    }
    const comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Неверный пароль'))
    }
    const token = generateJWT(user.id, user.email, user.role)
    return res.status(200).json({token})
  }

  async check (req, res) {
    const token = generateJWT(req.user.id, req.user.email, req.user.role)
    return res.status(200).json({token})
  }
}

module.exports = new UserController()