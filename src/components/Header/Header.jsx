import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import './Header.css';
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';

function Header() {

  const [loggedIn, setLoggedIn] = useState(false); //для проверки разных вариантов Header менять true/false
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // console.log("loggedIn", loggedIn)

  return (
    <header
      className={loggedIn ? 'header-login' : 'header'}>
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
          <>
            <nav className='header-nav'>
              <Link to='/movies' className={cn('header-nav__visible', 'header-nav__link', {
                'header-nav__link_active': pathname === '/movies',
              })}>Фильмы</Link>
              <Link to='/saved-movies' className={cn('header-nav__visible', 'header-nav__link', {
                'header-nav__link_active': pathname === '/saved-movies',
              })}> Сохранённые фильмы </Link>
            </nav>
            <Link to='/profile' className={cn('header-nav__visible', 'header-nav__profile-logo')}>Аккаунт</Link>

            <Navigation
              isOpenMenu={isOpenMenu}
              setIsOpenMenu={setIsOpenMenu} />
          </>
          :
          <nav className='header__navigation'>
            <button className='header__singup-link' type='button' onClick={() => navigate('/signup')}>Регистрация</button>
            <button className='header__singin-link' type='button' onClick={() => navigate('/signin')}>Войти</button>
          </nav>
        }
      </div>
    </header>
  )
};

export default Header;
