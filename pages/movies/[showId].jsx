import React from "react";
import axios from "axios";
import Sidebar from "../../client/components/Sidebar";
import ShowPage from "../../client/components/ShowPage";
import MovieCollection from "../../client/state/utils/MovieCollection";
import PersonCollection from "../../client/state/utils/PersonCollection";

export default function MovieId({ show, cast }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        minWidth: "100vw"
      }}
    >
      <Sidebar />
      <ShowPage show={show} cast={cast} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { showId } = context.query;
  const tmdb = process.env.api_key;
  const omdb = process.env.omdb_key;
  const tmdb_url = `https://api.themoviedb.org/3/movie/${showId}?api_key=${tmdb}&append_to_response=credits`;
  const { data: movie, err } = await axios.get(tmdb_url);
  if (err) {
    return {
      notFound: true
    };
  }
  if (movie.imdb_id) {
    const omdb_url = `http://www.omdbapi.com/?i=${movie.imdb_id}&apikey=${omdb}`;
    return await axios
      .get(omdb_url)
      .then(({ data }) => {
        movie.ratings = data.Ratings;
        movie.rated = data.Rated;
        return {
          props: {
            show: MovieCollection(movie),
            cast: movie.credits.cast
              .slice(0, 20)
              .map((actor) => PersonCollection(actor))
          }
        };
      })
      .catch((err) => {
        return {
          props: {
            show: MovieCollection(movie),
            cast: movie.credits.cast
              .slice(0, 20)
              .map((actor) => PersonCollection(actor))
          }
        };
      });
  } else {
    return {
      props: {
        show: MovieCollection(movie),
        cast: movie.credits.cast
          .slice(0, 20)
          .map((actor) => PersonCollection(actor))
      }
    };
  }
}
