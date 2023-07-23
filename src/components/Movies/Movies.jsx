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

  const storageAllMovies = JSON.parse(localStorage.getItem('storageAllMovies')) || [];

  useEffect(() => {
    const storageSearchResult = JSON.parse(localStorage.getItem('storageSearchResult')) || [];
    const storageIsShort = JSON.parse(localStorage.getItem('storageIsShort')) || false;
    const storageSearchWord = localStorage.getItem('storageSearchWord') || '';
    storageSearchResult && setIsSearchedMovies(storageSearchResult);
    storageIsShort && setIsShortMovies(storageIsShort);
    storageSearchWord && setSearchWord(storageSearchWord);
  }, []);

  const getFilteredMovies = (searchWord, isShortMovies) => {
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

  const handleFilterResult = (movies) => {
    setIsSearchedMovies(movies);
    localStorage.setItem('storageSearchResult', JSON.stringify(movies));
    movies.length === 0
      ? setErrorMessage(SearchFormMessage.NOT_FOUND)
      : setErrorMessage('');
  }

  const handleSubmitSearch = (searchWord) => {
    setSearchWord(searchWord);
    localStorage.setItem('storageSearchWord', searchWord);
    getFilteredMovies(searchWord, isShortMovies);
  };

  const handleChangeCheckbox = (isChecked) => {
    setIsShortMovies(isChecked);
    localStorage.setItem('storageIsShort', isChecked);
    getFilteredMovies(searchWord, isChecked);
  };

  const renderMoviesSection = () => {
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
