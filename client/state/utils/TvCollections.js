/**
 *
 * @param {Object[]} shows - Movies type returned by TMDB database
 * @param {Boolean} shows[].adult - Determines whether film is adult or not
 * @param {Number} shows[].id - Movie id
 * @param {String} shows[].overview - Overview of show
 * @param {String} shows[].poster_path - Poster path for show
 * @param {String} shows[].name - Title of show
 * @param {String} shows[].first_air_date - Release date of show
 * @param {Number} shows[].vote_average - Vote average of show
 *
 */

const MovieCollection = (shows) => {
  return shows.map((show) => {
    return {
      adult: show.adult,
      id: show.id,
      overview: show.overview,
      poster: show.poster_path
        ? `https://image.tmdb.org/t/p/w200${show.poster_path}`
        : null,
      title: show.name,
      release_date: show.first_air_date,
      vote_average: show.vote_average
    };
  });
};

export default MovieCollection;
