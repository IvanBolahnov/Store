import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor () {
    this._types = [
      {"id":1,"name":"Ноутбуки","createdAt":"2022-11-12T16:03:07.314Z","updatedAt":"2022-11-12T16:03:07.314Z"},
      {"id":2,"name":"Смартфоны","createdAt":"2022-11-12T16:04:16.420Z","updatedAt":"2022-11-12T16:04:16.420Z"}
    ]
    this._brands = [
      {"id":1,"name":"Apple","createdAt":"2022-11-12T16:09:30.384Z","updatedAt":"2022-11-12T16:09:30.384Z"},
      {"id":2,"name":"Samsung","createdAt":"2022-11-12T16:09:53.248Z","updatedAt":"2022-11-12T16:09:53.248Z"},
      {"id":3,"name":"Honor","createdAt":"2022-11-12T20:48:56.727Z","updatedAt":"2022-11-12T20:48:56.727Z"},
      {"id":4,"name":"Lenovo","createdAt":"2022-11-14T11:30:33.016Z","updatedAt":"2022-11-14T11:30:33.016Z"}
    ]
    this._devices = [
      {"id":1,"name":"iPhone 12 Pro 256GB Graphite","price":72000,"rating":0,"img":"1c0b459e-b8e9-4285-8374-64e04c70989b.jpg","createdAt":"2022-11-12T16:40:46.466Z","updatedAt":"2022-11-12T16:40:46.466Z","typeId":2,"brandId":1},
      {"id":2,"name":"Honor 20 128 GB Blue","price":25000,"rating":0,"img":"c8dd073a-c871-417b-847f-8e5bf1530db9.jpg","createdAt":"2022-11-12T20:49:48.074Z","updatedAt":"2022-11-12T20:49:48.074Z","typeId":2,"brandId":3},
      {"id":3,"name":"Galaxy Z Flip4 256GB Blue","price":70000,"rating":0,"img":"7451862f-5509-4113-ac9e-be0d371d6e96.jpg","createdAt":"2022-11-12T21:17:43.709Z","updatedAt":"2022-11-12T21:17:43.709Z","typeId":2,"brandId":2}
    ]
    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}