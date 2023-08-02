import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import cn from 'classnames';
import useClose from '../../hooks/useClose';

function Navigation({ isOpenMenu, setIsOpenMenu, handleOverlayClick }) {

  const { pathname } = useLocation();
  useClose(isOpenMenu, () => { setIsOpenMenu(false) });

  const navigationClassNames = cn('navigation', {
    'navigation_opened': isOpenMenu,
  });

  const LinkClassNames = cn('navigation__link navigation__link_type_main', {
    'navigation__link_active': pathname === '/',
  })

  const moviesLinkClassNames = cn('navigation__link', {
    'navigation__link_active': pathname === '/movies',
  });

  const savedMoviesLinkClassNames = cn('navigation__link', {
    'navigation__link_active': pathname === '/saved-movies',
  });

  if (isOpenMenu) {
    return (
      <div className={navigationClassNames} onClick={handleOverlayClick}>
        <nav className='navigation__content'>
          <div className='navigation__container'>
            <Link to='/' className={LinkClassNames} onClick={() => { setIsOpenMenu(false) }}>Главная</Link>
            <Link to='/movies' className={moviesLinkClassNames} onClick={() => { setIsOpenMenu(false) }}>Фильмы</Link>
            <Link to='/saved-movies' className={savedMoviesLinkClassNames} onClick={() => { setIsOpenMenu(false) }}> Сохранённые фильмы </Link>
          </div>
          <Link to='/profile' className='navigation__profile-link navigation__profile-logo' onClick={() => { setIsOpenMenu(false) }}>Аккаунт</Link>
        </nav>
      </div>
    )
  }

  return null;
};

export default Navigation;

