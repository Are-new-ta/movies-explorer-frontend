import React from 'react';
import './NavTab.css';

function NavTab() {
  const links = [
    { label: 'О проекте', anchor: '#about-project' },
    { label: 'Технологии', anchor: '#technologies' },
    { label: 'Студент', anchor: '#about-me' },
  ];

  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__list'>
        {links.map(({ label, anchor }) => (
          <li key={label}> <a className='nav-tab__link' href={anchor}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavTab;



