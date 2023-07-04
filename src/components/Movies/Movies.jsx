import './Movies.css';
import movies from '../../utils/movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {

  const handleSubmitSearch = () => { };

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch} />

      <MoviesCardList movies={movies} />
    </main>
  )
};

export default Movies;
