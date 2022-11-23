import React, { useContext } from 'react'
import DeviceItem from './DeviceItem'
import '../styles/deviceList.scss'
import { Context } from '../index'

const DeviceList = () => {
  const {device} = useContext(Context)
  return (
    <section className="device-list">
      {device.devices.map(device => <DeviceItem key={device.id} device={device}/>)}
    </section>
  )
}

export default DeviceList