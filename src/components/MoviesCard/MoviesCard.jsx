import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import './MoviesCard.css';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MoviesCard({ movie, saveStatus }) {

  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { pathname } = useLocation();
  const { nameRU, trailerLink, thumbnail, duration } = movie;

  function durationFilm(time) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  useEffect(() => {
    setIsSaved(saveStatus.isSaved);
    setMainApiId(saveStatus.id);
  }, [saveStatus]);

  const handleSaveMovie = () => {
    setIsLoading(true);

    MainApi.saveMovie(movie)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        setIsSaved(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteMovie = () => {
    setIsLoading(true);

    MainApi.deleteMovie(mainApiId)
      .then(() => {
        setSavedMovies(savedMovies.filter((data) => {
          return !(data._id === mainApiId);
        }));
        setIsSaved(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const buttonClassNames = cn('card__button-like', {
    'card__button-like_type_saved': pathname === '/movies' && isSaved,
    'card__button-like_type_delete': pathname === '/saved-movies',
    //новый код, надо проработать этот стиль
    'card__button_disabled': isLoading,
  });

  return (
    <li className='card'>

      <a href={trailerLink}
        className='card__link'
        target='_blank'
        rel='noreferrer'>

        <img src={thumbnail}
          className='card__img'
          alt={nameRU} />
      </a>

      <div className='card__info'>
        <div className='card__container'>

          <h2 className='card__title'>{nameRU}</h2>

          <button type='button'
            className={buttonClassNames}
            aria-label={'save movie'}
            onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
            disabled={isLoading} />

        </div>
        <p className='card__duration'>{durationFilm(duration)}</p>
      </div>
    </li>
  )
}

export default MoviesCard;

