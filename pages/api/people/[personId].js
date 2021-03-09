import nextConnect from "next-connect";
import axios from "axios";
import MovieCollection from "../../../client/state/utils/MovieCollection";
import TvCollection from "../../../client/state/utils/TvCollection";
require("dotenv").config();

const handler = nextConnect();

handler.get(async (req, res) => {
  const { personId } = req.query;
  const api = process.env.api_key;
  const url = `https://api.themoviedb.org/3/person/${personId}?api_key=${api}&append_to_response=tv_credits,movie_credits`;
  try {
    const { data } = await axios.get(url);
    return res.status(200).send({
      tvCast: data.tv_credits.cast.map((show) => TvCollection(show)),
      tvCrew: data.tv_credits.crew.map((show) => TvCollection(show)),
      movieCast: data.movie_credits.cast.map((show) => MovieCollection(show)),
      movieCrew: data.movie_credits.crew.map((show) => MovieCollection(show))
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

export default handler;
