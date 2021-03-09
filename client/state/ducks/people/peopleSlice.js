import { createSlice } from "@reduxjs/toolkit";
import PeopleCollection from "../../utils/PeopleCollection";
import PersonCollection from "../../utils/PersonCollection";

const initialState = {
  loading: false,
  page: 1,
  person: null,
  people: [],
  tvCast: [],
  tvCrew: [],
  movieCast: [],
  movieCrew: [],
  shows: [],
  error: false
};

const personSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    loadPerson(state) {
      state.loading = true;
      state.error = false;
    },
    readPerson(state, action) {
      state.loading = false;
      state.tvCast = action.payload.tvCast;
      state.tvCrew = action.payload.tvCrew;
      state.movieCast = action.payload.movieCast;
      state.movieCrew = action.payload.movieCrew;
      state.shows = action.payload.movieCast;
      state.people = [];
    },
    readPeople(state, action) {
      state.loading = false;
      state.page = action.payload.people.length !== 0 ? 2 : null;
      state.person = null;
      state.people = PeopleCollection(action.payload.people);
    },
    paginatePeople(state, action) {
      state.loading = false;
      state.page = action.payload.people.length !== 0 ? state.page + 1 : null;
      state.people = [
        ...state.people,
        ...PeopleCollection(action.payload.people)
      ];
    },
    filterShows(state, action) {
      state.shows = state[action.payload.showType];
    },
    sortShowsByPopularity(state, action) {
      state.shows = state.shows.sort((a, b) => {
        return action.payload.orderBy === "descending"
          ? b.popularity - a.popularity
          : a.popularity - b.popularity;
      });
    },
    sortShowsByRelease(state, action) {
      state.shows = state.shows
        .filter((x) => x.release_date !== "")
        .sort((a, b) => {
          return action.payload.orderBy === "descending"
            ? new Date(b.release_date) - new Date(a.release_date)
            : new Date(a.release_date) - new Date(b.release_date);
        });
    },
    sortShowsByRating(state, action) {
      state.shows = state.shows.sort((a, b) => {
        return action.payload.orderBy === "descending"
          ? Number(b.vote_average) - Number(a.vote_average)
          : Number(a.vote_average) - Number(b.vote_average);
      });
    },
    errorPerson(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export default personSlice.reducer;

export const {
  loadPerson,
  errorPerson,
  readPerson,
  readPeople,
  paginatePeople,
  readShows,
  filterShows,
  sortShowsByPopularity,
  sortShowsByRating,
  sortShowsByRelease
} = personSlice.actions;
