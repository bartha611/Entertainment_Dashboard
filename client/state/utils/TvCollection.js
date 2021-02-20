/**
 *
 * @param {Object} show - Movies type returned by TMDB database
 * @param {Number} show.id - Id of show
 * @param {String} show.name - Title of show
 * @param {String} show.first_air_date - First air date of Show
 * @param {String[]} show.genres - Movie Genres
 * @param {String} show.overview - Movie overview
 * @param {String} show.backdrop_path - Backdrop path
 * @param {String} show.poster_path - Image path for poster
 * @param {String | null} show.character - Character in tv show
 * @param {String | null} show.job - Job in show
 * @param {Number} show.vote_average - Vote average for TMDB
 * @param {Object[]} show.ratings - Movie ratings from various review sources
 * @param {String} show.ratings[].Source - Source of rating
 * @param {String} show.ratings[].Value - Value of rating
 * @param {String} show.rated - Certification rating for show
 *
 */

const TvCollection = (show) => ({
  id: show.id,
  title: show.name,
  backdrop: `https://image.tmdb.org/t/p/w1280${show.backdrop_path}`,
  poster: show.poster_path
    ? `https://image.tmdb.org/t/p/w300${show.poster_path}`
    : null,
  release_date: show.first_air_date,
  overview: show.overview,
  vote_average: show.vote_average,
  job: show.job ? show.job : null,
  character: show.character ? show.character : null,
  genres: show.genres,
  ratings: show.ratings?.map((rating) => {
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
  }),
  rated: show.rated,
});

export default TvCollection;
