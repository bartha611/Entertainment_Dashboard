import React from "react";
import axios from "axios";
import Sidebar from "../../client/components/Sidebar";
import ShowPage from "../../client/components/ShowPage";
import TVCollection from "../../client/state/utils/TvCollection";
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
  const tmdb_url = `https://api.themoviedb.org/3/tv/${showId}?api_key=${tmdb}&append_to_response=aggregate_credits`;
  const { data: show, err } = await axios.get(tmdb_url);
  if (err) {
    return {
      notFound: true
    };
  }
  if (show.name) {
    const title = encodeURI(show.name);
    const omdb_url = `http://www.omdbapi.com/?t=${title}&apikey=${omdb}`;
    return axios
      .get(omdb_url)
      .then(({ data }) => {
        show.ratings = data.Ratings;
        show.rated = data.Rated;
        return {
          props: {
            show: TVCollection(show),
            cast: show.aggregate_credits.cast
              .slice(0, 30)
              .map((actor) => PersonCollection(actor))
          }
        };
      })
      .catch((err) => {
        return {
          props: {
            show: TVCollection(show),
            cast: show.aggregate_credits.cast
              .slice(0, 30)
              .map((actor) => PersonCollection(actor))
          }
        };
      });
  } else {
    return {
      props: {
        show: TVCollection(show),
        cast: show.aggregate_credits.cast
          .slice(0, 30)
          .map((actor) => PersonCollection(actor))
      }
    };
  }
}
