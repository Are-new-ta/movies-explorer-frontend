import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { WindowWidth, Length } from '../../utils/const';

function MoviesCardList({ movies }) {

  const { pathname } = useLocation();
  const { savedMovies } = useContext(CurrentUserContext);
  const [quantityMovies, setQuantityMovies] = useState(0);
  const [isMoreButton, setIsMoreButton] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResizeWindow() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= WindowWidth.MOBILE) {
      setQuantityMovies(Length.MOBILE);
    } else if (windowWidth <= WindowWidth.TABLET) {
      setQuantityMovies(Length.TABLET);
    } else {
      setQuantityMovies(Length.DESKTOP);
    }
  }, [windowWidth, movies.length]);

  useEffect(() => {
    if (pathname === '/movies') {
      movies.length > quantityMovies ? setIsMoreButton(true) : setIsMoreButton(false);
    } else {
      setIsMoreButton(false);
    }
  }, [pathname, movies.length, quantityMovies]);

  function checkIsSaved(movie) {
    const targetMovie = savedMovies.find((film) => film.movieId === movie.movieId);
    return targetMovie
      ? { isSaved: true, id: targetMovie._id }
      : { isSaved: false, id: '' }
  };

  function handleMoreButtonClick() {
    setQuantityMovies((current) => {
      if (windowWidth <= WindowWidth.TABLET) {
        return current + 2;
      }
      return current + 3;
    })
  };

  function renderMovieCards() {

    if (pathname === '/movies') {
      return movies.length ? movies.slice(0, quantityMovies).map((movie) => (
        <MoviesCard key={movie.movieId} movie={movie} saveStatus={checkIsSaved(movie)} />)) : '';
    } else {
      return movies.length ? movies.map((movie) => (
        <MoviesCard key={movie.movieId} movie={movie} saveStatus={{ isSaved: true, id: movie._id }} />)) : '';
    }
  };

  return (
    <section className='cards'>
      <div className='cards__wrapper'>
        <ul className='cards__list'> {renderMovieCards()}</ul>
        {isMoreButton
          ?
          <div className='cards__more'>
            <button
              type='button'
              className='cards__more-button button'
              onClick={handleMoreButtonClick}>Ещё</button>
          </div>
          : ''}
      </div>
    </section>
  )
};

export default MoviesCardList;






