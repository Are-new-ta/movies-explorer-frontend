import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import cn from 'classnames';

function Navigation({ isOpenMenu, setIsOpenMenu }) {

  const { pathname } = useLocation();

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

  return (
    <div className={navigationClassNames}>
      <nav className='navigation__content'>
        <div className='navigation__container'>
          <Link to='/' className={LinkClassNames}>Главная</Link>
          <Link to='/movies' className={moviesLinkClassNames}>Фильмы</Link>
          <Link to='/saved-movies' className={savedMoviesLinkClassNames}> Сохранённые фильмы </Link>
        </div>
        <Link to='/profile' className='navigation__profile-link'>Аккаунт</Link>
      </nav>
    </div>
  )
};

export default Navigation;
