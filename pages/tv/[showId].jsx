import React from "react";
import axios from "axios";
import Sidebar from "../../client/components/Sidebar";
import ShowPage from "../../client/components/ShowPage";
import TVCollection from "../../client/state/utils/TvCollection";

export default function MovieId({ show }) {
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
      <ShowPage show={show} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { showId } = context.query;
  const tmdb = process.env.api_key;
  const omdb = process.env.omdb_key;
  const tmdb_url = `https://api.themoviedb.org/3/tv/${showId}?api_key=${tmdb}`;
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
          props: { show: TVCollection(show) }
        };
      })
      .catch((err) => {
        return {
          props: { show: TVCollection(show) }
        };
      });
  } else {
    return {
      props: { show: TVCollection(show) }
    };
  }
}
