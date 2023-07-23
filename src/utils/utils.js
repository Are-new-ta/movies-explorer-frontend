import { IMAGES_URL, MAIN_BASE_LOCAL } from './constApi';
import { SHORT_FILM_DURATION } from './const';

const filterMovies = (movies, searchWord, isShort) => {
  const word = searchWord.toLowerCase().trim();
  const searchedMovies = movies.filter((movie) => {
    const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();
    const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();
    return (ruName.match(word)) || (enName && enName.match(word));
  });

  if (isShort) {
    return searchedMovies.filter((movie) => movie.duration <= SHORT_FILM_DURATION);
  }

  return searchedMovies;
};

const patternMovies = (movies) => {
  return movies
    .map((movie) => ({
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration || 60,
      year: movie.year || 2000,
      description: movie.description || 'unknown',
      image: `${IMAGES_URL}/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${IMAGES_URL}/${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'unknown',
      nameEN: movie.nameEN || 'unknown',
    }))
    .map((movie) => (
      MAIN_BASE_LOCAL.test(movie.trailerLink) ? movie : { ...movie, trailerLink: movie.image }
    ));
};

export { filterMovies, patternMovies };
