import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {

  const [isShortFilm, setIsShotFilm] = useState(false);

  const toggleShortFilm = () => {
    setIsShotFilm(!isShortFilm)
  }

  return (
    <section className='search'>
      <div className='search__wapper'>
        <form className='search__form'>
          <input className='search__input' placeholder='Фильм' required />
          <button className='search__button'>Поиск</button>
        </form>
        <ul className='search__filters'>
          <li className='search__filter'>
            <button
              className={`filter__icon ${isShortFilm ? 'filter__icon_active' : ''}`}
              onClick={toggleShortFilm}></button>
            <p className='filter__text'>Короткометражки</p>
          </li>
        </ul>
        <div className='search__bottom'></div>
      </div>
    </section>
  );
}

export default SearchForm;

