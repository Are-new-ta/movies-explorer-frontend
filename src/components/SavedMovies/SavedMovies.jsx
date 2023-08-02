import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';
import { SearchFormMessage } from '../../utils/const';

function SavedMovies() {
  const { savedMovies } = useContext(CurrentUserContext);
   const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useState({
    searchWord: '',
    isShort: false,
  });

  function getFilteredMovies(searchWord, isShort) {
    const filteredMovies = filterMovies(savedMovies, searchWord, isShort);
    filteredMovies.length === 0 ? setErrorMessage(SearchFormMessage.NOT_FOUND) : setErrorMessage('');
    !savedMovies.length ? setErrorMessage(SearchFormMessage.NOT_SAVED) : setErrorMessage('');
    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(savedMovies);
    getFilteredMovies(searchParams.searchWord, searchParams.isShort);
    !savedMovies.length ? setErrorMessage(SearchFormMessage.NOT_SAVED) : setErrorMessage('');
  }, [savedMovies]);

  function handleSubmitSearch(word) {
    setSearchParams({ ...searchParams, searchWord: word });
    getFilteredMovies(word, searchParams.isShort);
  };

  function handleChangeCheckbox(isChecked) {
    setSearchParams({ ...searchParams, isShort: isChecked });
    getFilteredMovies(searchParams.searchWord, isChecked);
  };

  function renderMoviesSection() {
    if (errorMessage.length) {
      return <p className='cards__search-message'>{errorMessage}</p>;
    }
    return (
      <MoviesCardList movies={movies} />
    )
  };

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
        showError={setErrorMessage} />
      {renderMoviesSection()}
    </main>
  )
};

export default SavedMovies;

