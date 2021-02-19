import { createSlice } from "@reduxjs/toolkit";
import MovieCollection from "../../utils/MovieCollection";
import MoviesCollection from "../../utils/MoviesCollection";

const initialState = {
  loading: false,
  page: 1,
  show: null,
  movies: [],
  error: false
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadMovie(state) {
      state.loading = true;
      state.error = false;
    },
    readMovie(state, action) {
      state.loading = false;
      state.show = MovieCollection(action.payload.movies);
      state.movies = [];
    },
    readMovies(state, action) {
      state.loading = false;
      state.page = action.payload.movies.length !== 0 ? 2 : null;
      state.show = null;
      state.movies = MoviesCollection(action.payload.movies);
    },
    paginateMovies(state, action) {
      state.loading = false;
      state.page = action.payload.movies.length !== 0 ? state.page + 1 : null;
      state.movies = [
        ...state.movies,
        ...MoviesCollection(action.payload.movies)
      ];
    },
    errorMovie(state) {
      state.loading = false;
      state.error = true;
    }
  }
});

export default movieSlice.reducer;

export const {
  loadMovie,
  readMovie,
  readMovies,
  paginateMovies,
  errorMovie
} = movieSlice.actions;
