/**
 *
 *
 * @param {Object} movie - Movies type returned by TMDB database
 * @param {String} movie.title - Title of movie
 * @param {String} movie.release_date - Movie Release date
 * @param {String[]} movie.genres - Movie Genres
 * @param {String} movie.overview - Movie overview
 * @param {String} movie.backdrop_path - Backdrop path
 * @param {String} movie.poster_path - Image path for poster
 * @param {Number} movie.vote_average - Vote average for TMDB
 * @param {Number} movie.runtime
 * @param {String | null} movie.character - Character of movie
 * @param {String | null} movie.job - Job if crew member
 * @param {Object[]} movie.ratings - Movie ratings from various review sources
 * @param {String} movie.ratings[].Source - Source of rating
 * @param {String} movie.ratings[].Value - Value of rating
 * @param {String} movie.rated - Certification rating for movie
 *
 *
 */

const MovieCollection = (movie) => ({
  title: movie.title,
  backdrop: `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`,
  poster: movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : null,
  release_date: movie.release_date,
  overview: movie.overview,
  vote_average: movie.vote_average,
  genres: movie.genres,
  runtime: movie.runtime,
  character: movie.character,
  job: movie.job,
  ratings:
    movie.ratings?.map((rating) => {
      if (rating.Source === "Internet Movie Database") {
        rating.image = "/imdb.png";
      } else if (
        rating.Source === "Rotten Tomatoes" &&
        parseFloat(rating.Value) >= 60
      ) {
        rating.image = "/Fresh.png";
      } else if (
        rating.Source === "Rotten Tomatoes" &&
        parseFloat(rating.Value) < 60
      ) {
        rating.image = "/Rotten.png";
      } else {
        rating.image = "/metacritic.jpg";
      }
      return rating;
    }) || null,
  rated: movie.rated || null,
});

export default MovieCollection;
