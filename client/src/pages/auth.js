import {NavLink, useLocation} from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <main className="auth">
      <form>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <input style={{marginRight: '15px'}} type="text" placeholder="Email"/>
        <input style={{marginRight: '15px'}} type="password" placeholder="Пароль"/>
        <button>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        {isLogin ? 
          <p>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></p>
          :
          <p>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></p>
        }
      </form>
    </main>
  );
}

export default Auth