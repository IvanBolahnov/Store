const uuid = require('uuid');
const path = require('path');
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/apiError')

class DeviceController {
  // Создание девайса
  // Пример: POST http://localhost:5000/api/device в body отправляем form-data с параметрами name, price, brandId, typeId, img (file), info (JSON)
  async create (req, res) {
    try {
      const {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      let filename = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', filename))

      const device = await Device.create({name, price, brandId, typeId, img: filename})
      
      if (info) {
        info = JSON.parse(info)
        info.forEach(i => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        })
      }

      return res.status(200).json(device)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }

  // Получение девайсов
  // Пример: GET http://localhost:5000/api/device параметрами можно передать brandId, typeId, limit, page (бренд тип, лимит девайсов на странице, номер страницы)  
  async getAll (req, res) {
    let {brandId, typeId, limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    
    let findDevices = async (brandId, typeId, limit, offset) => {
      let devices
      
      if (!brandId && !typeId) {
        return await Device.findAndCountAll({limit, offset})
      }
      if (brandId && !typeId) {
        return await Device.findAndCountAll({where: {brandId: brandId}, limit, offset})
      }
      if (!brandId && typeId) {
        return await Device.findAndCountAll({where: {typeId: typeId}, limit, offset})
      }
      if (brandId && typeId) {
        return await Device.findAndCountAll({where: {brandId: brandId, typeId: typeId}, limit, offset})
      }
    }
    
    let devices = await findDevices(brandId, typeId, limit, offset)

    return res.status(200).json(devices)
  }

  // Получение девайса по Id
  // Пример: GET http://localhost:5000/api/device/3
  async getOne (req, res) {
    const {id} = req.params

    const device = await Device.findOne({
      where: {id},
      include: [{model: DeviceInfo, as: 'info'}]
    })

    return res.status(200).json(device)
  }
}

module.exports = new DeviceController()