import { useState } from "react";
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import './MoviesCard.css';

function MoviesCard({ movie }) {

  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const { pathname } = useLocation();
  const { nameRU, trailerLink, image, duration } = movie;

  function handleSaveMovie() {
    setIsSavedMovies(true);
  };

  function handleDeleteMovie() {
    setIsSavedMovies(false);
  };

  function durationFilm(time) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  // *
  const url = 'https://api.nomoreparties.co';

  const buttonClassNames = cn('card__button-like', {
    'card__button-like_type_saved': pathname === '/movies' && isSavedMovies,
    'card__button-like_type_delete': pathname === '/saved-movies',
  });

  return (
    <li className='card'>

      <a href={trailerLink}
        className='card__link'
        target='_blank'
        rel='noreferrer'>

        <img src={`${url}${image?.formats?.thumbnail?.url}`}
          className='card__img'
          alt={nameRU} />
      </a>

      <div className='card__info'>
        <div className='card__container'>

          <h2 className='card__title'>{nameRU}</h2>

          <button type='button'
            className={buttonClassNames}
            aria-label={'save movie'}
            onClick={isSavedMovies ? handleDeleteMovie : handleSaveMovie} />

        </div>
        <p className='card__duration'>{durationFilm(duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;

