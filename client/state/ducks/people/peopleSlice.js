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
      state.person = PersonCollection(action.payload.people);
      state.tvCast = action.payload.tvCast;
      state.tvCrew = action.payload.tvCrew;
      state.movieCast = action.payload.movieCast;
      state.shows = action.payload.shows;
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
  readShows
} = personSlice.actions;
