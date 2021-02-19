/**
 *
 * @param {Object[]} movies - Movies type returned by TMDB database
 * @param {Boolean} movies[].adult - Determines whether film is adult or not
 * @param {Number} movies[].id - Movie id
 * @param {String} movies[].overview - Overview of movie
 * @param {String} movies[].poster_path - Poster path for movie
 * @param {String} movies[].title - Title of movie
 * @param {String} movies[].release_date - Release date of movie
 * @param {Number} movies[].vote_average - Vote average of movie
 *
 */

const MovieCollection = (movies) => {
  return movies.map((movie) => {
    return {
      adult: movie.adult,
      id: movie.id,
      overview: movie.overview,
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
        : null,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    };
  });
};

export default MovieCollection;
