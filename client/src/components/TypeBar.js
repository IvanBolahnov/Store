import React, { useContext } from 'react'
import { } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import '../styles/typeBar.scss'

import { Context } from '../index';

const TypeBar = observer( () => {
  const {device} = useContext(Context);
  return (
    <section className='type-bar'>
      <ul>
      {device.types.map(type => 
        <li key={type.id}>
          <button
          onClick={() => {type.id === device.selectedType.id ? device.setSelectedType({}) : device.setSelectedType(type)}}
          className={(type.id === device.selectedType.id ? 'active' : '')}
          >
            {type.name}
          </button>
        </li>
      )}
      </ul>
    </section>    
  )
})

export default TypeBar