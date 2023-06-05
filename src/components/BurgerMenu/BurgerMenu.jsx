import cn from 'classnames';
import './BurgerMenu.css';

function BurgerMenu({ loggedIn, isOpenMenu, setIsOpenMenu }) {

  const classNameBurgerMenu = cn('burger-menu', { 'burger-menu__invisible': !loggedIn, 'burger-menu_close': isOpenMenu });

  function toogleBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <button type='button' className={classNameBurgerMenu} onClick={toogleBurgerMenu}>
      <span className='burger-menu_type_line'></span>
    </button>
  )
};

export default BurgerMenu;