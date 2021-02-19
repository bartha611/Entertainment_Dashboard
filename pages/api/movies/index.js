import nextConnect from "next-connect";
import axios from "axios";
require("dotenv").config();

const handler = nextConnect();

handler.get(async (req, res) => {
  const { page = 1, type = "popular", search, personId } = req.query;
  const api = process.env.api_key;
  try {
    let url;
    if (!search && !personId) {
      url = `https://api.themoviedb.org/3/movie/${type}?api_key=${api}&page=${page}`;
    } else if (personId) {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&page=${page}&with_people=${personId}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}&page=${page}`;
    }
    const response = await axios.get(url);
    const { results: movies } = response.data;
    return res.status(200).send({ movies });
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default handler;
