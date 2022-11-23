import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {observer} from 'mobx-react-lite'

import { Context } from '../index'
import { SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
  const {user} = useContext(Context)  
  return (
    <header style={{display: 'flex', gap: '15px'}}>
      <NavLink to={SHOP_ROUTE}>Medal</NavLink>
      {user.isAuth ? 
        <nav>
          <button onClick={ () => {user.setIsAuth(false)}}>Выйти</button>
        </nav>:
        <nav>
          <button onClick={ () => {user.setIsAuth(true)}}>Войти</button>
        </nav>
      }
    </header>
  )
})

export default NavBar
