import { createSlice } from "@reduxjs/toolkit";
import PeopleCollection from "../../utils/PeopleCollection";
import PersonCollection from "../../utils/PersonCollection";

const initialState = {
  loading: false,
  page: 1,
  person: null,
  people: [],
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
  paginatePeople
} = personSlice.actions;
