import axios from "axios";
import * as actions from "./peopleSlice";

const populateData = (results) => ({
  READ_PERSON: actions.readPerson(results),
  READ_PEOPLE: actions.readPeople(results),
  READ_SHOWS: actions.readShows(results),
  PAGINATE: actions.paginatePeople(results),
});

const fetchPeople = (url, operation) => async (dispatch) => {
  dispatch(actions.loadPerson());
  try {
    const response = await axios.get(url);
    dispatch(populateData(response.data)[operation]);
  } catch (err) {
    console.log(err);
    dispatch(actions.errorPerson());
  }
};

export default fetchPeople;
