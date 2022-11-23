import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

const DeviceItem = ({device}) => {
  const navigate = useNavigate()
  return (

    <aside onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <img width='150' height='150' src={'http://localhost:5000/' + device.img} alt={device.name} />
      <h3>{device.name}</h3>
      <h4>{device.price + '₽'}</h4>
    </aside>
  )
}

export default DeviceItem