import { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoviesApi from '../../utils/MoviesApi';
import { SearchFormMessage } from '../../utils/const';
import { filterMovies, patternMovies } from '../../utils/utils';

function Movies() {

  const [isSearchedMovies, setIsSearchedMovies] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // массив для хранения данных о всех фильмах
  const storageAllMovies = JSON.parse(localStorage.getItem('storageAllMovies')) || [];

  // Загрузка списка всех фильмов в начале работы страницы единожды
  useEffect(() => {
    // storageSearchResult обрабатывает входящие фильмы и их колество
    const storageSearchResult = JSON.parse(localStorage.getItem('storageSearchResult')) || [];

    // storageIsShort обрабатывает входящие фильмы: short есть или нет
    const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort')) || false;

    // storageSearchWord  обрабатывает слово, которое было введено в поисковую строку
    const storageSearchWord = localStorage.getItem('storageSearchWord') || '';

    storageSearchResult && setIsSearchedMovies(storageSearchResult);
    storageIsShort && setIsShortMovies(storageIsShort);
    storageSearchWord && setSearchWord(storageSearchWord);
  }, []);

  function getFilteredMovies(searchWord, isShortMovies) {
    if (!storageAllMovies.length) {
      setIsLoading(true);

      MoviesApi.getMovies()
        .then((allMovies) => {
          const patternedMovies = patternMovies(allMovies);
          localStorage.setItem('storageAllMovies', JSON.stringify(patternedMovies));
          const filteredMovies = searchWord
            ? filterMovies(patternedMovies, searchWord, isShortMovies)
            : [];
          handleFilterResult(filteredMovies);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(SearchFormMessage.SEARCH_ERROR);
        })
        .finally(() => setIsLoading(false));
    } else {
      const filteredMovies = searchWord
        ? filterMovies(storageAllMovies, searchWord, isShortMovies)
        : [];
      handleFilterResult(filteredMovies);
    }
  };

  function handleFilterResult(movies) {
    setIsSearchedMovies(movies);
    localStorage.setItem('storageSearchResult', JSON.stringify(movies));
    movies.length === 0
      ? setErrorMessage(SearchFormMessage.NOT_FOUND)
      : setErrorMessage('');
  }

  function handleSubmitSearch(searchWord) {
    setSearchWord(searchWord);
    localStorage.setItem('storageSearchWord', searchWord);
    getFilteredMovies(searchWord, isShortMovies);
  };

  function handleChangeCheckbox(isChecked) {
    setIsShortMovies(isChecked);
    localStorage.setItem('storageIsShort', isChecked);
    getFilteredMovies(searchWord, isChecked);
  };

  function renderMoviesSection() {
    if (errorMessage.length) { return <p className='cards__search-message'>{errorMessage}</p>; }
    return (<MoviesCardList movies={isSearchedMovies} />)
  };

  return (
    <main>
      <SearchForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeCheckbox={handleChangeCheckbox}
        showError={setErrorMessage}
        isLoading={isLoading}
      />
      {isLoading ? <Preloader /> : renderMoviesSection()}
    </main>
  )
};

export default Movies;

