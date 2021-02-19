import axios from "axios";
import * as actions from "./movieSlicer";

const populateData = (results) => ({
  READ_MOVIE: actions.readMovie(results),
  READ_MOVIES: actions.readMovies(results),
  PAGINATE: actions.paginateMovies(results)
});

const fetchMovies = (url, operation) => async (dispatch) => {
  dispatch(actions.loadMovie());
  try {
    const response = await axios.get(url);
    console.log(response);
    dispatch(populateData(response.data)[operation]);
  } catch (err) {
    dispatch(actions.errorMovie());
  }
};

export default fetchMovies;
