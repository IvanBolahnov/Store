import React, { useContext } from 'react'
import { } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import '../styles/brandBar.scss'

import { Context } from '../index';

const BrandBar = observer( () => {
  const {device} = useContext(Context);
  return (
    <section className='brand-bar'>
      <ul>
      {device.brands.map(brand => 
        <li key={brand.id}>
          <button
          onClick={() => {brand.id === device.selectedBrand.id ? device.setSelectedBrand({}) : device.setSelectedBrand(brand)}}
          className={(brand.id === device.selectedBrand.id ? 'active' : '')}
          >
            {brand.name}
          </button>
        </li>
      )}
      </ul>
    </section>    
  )
})

export default BrandBar