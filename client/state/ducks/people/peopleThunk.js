import axios from "axios";
import * as actions from "./peopleSlice";

const populateData = (results) => ({
  READ_PERSON: actions.readPerson(results),
  READ_PEOPLE: actions.readPeople(results),
  PAGINATE: actions.paginatePeople(results)
});

const fetchPeople = (url, operation) => async (dispatch) => {
  dispatch(actions.loadPerson());
  try {
    const response = await axios.get(url);
    console.log(response.data);
    dispatch(populateData(response.data)[operation]);
    dispatch(actions.sortShowsByPopularity({ orderBy: "descending" }));
  } catch (err) {
    console.log(err);
    dispatch(actions.errorPerson());
  }
};

export default fetchPeople;
