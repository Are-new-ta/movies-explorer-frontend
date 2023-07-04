import cn from 'classnames';
import './BurgerMenu.css';

function BurgerMenu({ loggedIn, isOpenMenu, setIsOpenMenu }) {

  const classNameBurgerMenu = cn('burger-menu', { 'burger-menu_close': isOpenMenu });

  function toogleBurgerMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  if (loggedIn) {
    return (
      <button type='button' className={classNameBurgerMenu} onClick={toogleBurgerMenu}>
        <span className='burger-menu__line'></span>
      </button>
    )
  }

  return null

};

export default BurgerMenu;


