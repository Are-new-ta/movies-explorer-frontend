import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';

function Header() {

  const [loggedIn, setLoggedIn] = useState(true); //для проверки разных вариантов Header менять true/false
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className='header'>
      <div className='header__content'>
        <BurgerMenu
          loggedIn={loggedIn}
          isOpenMenu={isOpenMenu}
          setIsOpenMenu={setIsOpenMenu} />

        <Link
          to='/'
          className={loggedIn ? '' : 'header__logo-link'}>
          <img src={logo} alt='Лого' className='logo' />
        </Link>

        {loggedIn
          ?
          <Navigation
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu} />
          :
          <nav className='header__navigation'>
            <Link
              to='/singup'
              className='header__singup-link'>Регистрация</Link>
            <Link
              to='/singin'
              className='header__singin-link'>Войти</Link>
          </nav>
        }
      </div>
    </header>
  )
};

export default Header;