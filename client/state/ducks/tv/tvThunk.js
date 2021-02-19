import * as actions from "./tvSlice";
import axios from "axios";

const populateData = (results) => ({
  READ_SHOWS: actions.readTvShows(results),
  READ_SHOW: actions.readTvShow(results),
  PAGINATE: actions.paginateTvShows(results)
});

const tvThunk = (url, operation) => async (dispatch) => {
  dispatch(actions.loadTv());
  try {
    const response = await axios.get(url);
    dispatch(populateData(response.data)[operation]);
  } catch (err) {
    console.log(err);
    dispatch(actions.errorTv());
  }
};

export default tvThunk;
