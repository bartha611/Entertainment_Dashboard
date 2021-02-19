import nextConnect from "next-connect";
import axios from "axios";

require("dotenv").config();

const handler = nextConnect();

handler.get(async (req, res) => {
  const { page = 1, type = "popular", search } = req.query;
  const api = process.env.api_key;
  try {
    let url;
    if (search) {
      url = `https://api.themoviedb.org/3/search/tv?api_key=${api}&query=${search}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/tv/${type}?api_key=${api}&page=${page}`;
    }
    const response = await axios.get(url);
    const { results } = response.data;
    return res.status(200).send({ results });
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default handler;
