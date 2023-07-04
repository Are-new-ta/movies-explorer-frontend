
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
};

export default SavedMovies;