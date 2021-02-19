import nextConnect from "next-connect";
import axios from "axios";
require("dotenv").config();

const handler = nextConnect();

handler.get(async (req, res) => {
  console.log(req.query);
  const { page = 1, showType, department, personId } = req.query;
  const api = process.env.api_key;
  const url = `https://api.themoviedb.org/3/discover/${showType}?api_key=${api}&${department}=${personId}&page=${page}`;
  console.log(url);
  try {
    const response = await axios.get(url);
    return res.status(200).send({ movies: response.data.results });
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default handler;
