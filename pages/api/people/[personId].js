import nextConnect from "next-connect";
import axios from "axios";
import MovieCollection from "../../../client/state/utils/MovieCollection";
import TvCollection from "../../../client/state/utils/TvCollection";
require("dotenv").config();

const handler = nextConnect();

handler.get(async (req, res) => {
  const { showType, department, personId } = req.query;
  const api = process.env.api_key;
  const url = `https://api.themoviedb.org/3/person/${personId}/${showType.toLowerCase()}_credits?api_key=${api}`;
  try {
    const response = await axios.get(url);
    const results =
      department === "Cast" ? response.data.cast : response.data.crew;
    const shows = results
      .sort((a, b) => {
        return b.popularity - a.popularity;
      })
      .map((show) => {
        return showType.toLowerCase() === "movie"
          ? MovieCollection(show)
          : TvCollection(show);
      });
    return res.status(200).send({ shows });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

export default handler;
