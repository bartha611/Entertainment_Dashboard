import peopleReducer, {
  sortShowsByPopularity,
  sortShowsByRating,
  sortShowsByRelease,
  filterShows
} from "./peopleSlice";
import fetchPeople from "./peopleThunk";

export default peopleReducer;
export {
  fetchPeople,
  sortShowsByPopularity,
  sortShowsByRating,
  sortShowsByRelease,
  filterShows
};
