import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movies from '../../utils/movies';

function MoviesCardList() {
  //временное решение для сохраненных карточек
  const handleMoreButtonClick = () => { };
  return (
    <section className='cards'>
      <div className='cards__wrapper'>
        <ul className='cards__list'>
          {movies.map((movie) => (<MoviesCard key={movie.id} movie={movie} />))}
        </ul>
        <button type='button' className='cards__more-button button' onClick={handleMoreButtonClick}>Ещё</button>
      </div>
    </section>
  )
};

export default MoviesCardList;
