import { createSlice } from "@reduxjs/toolkit";
import TVCollections from "../../utils/TvCollections";
import TVCollection from "../../utils/TvCollection";

const initialState = {
  loading: false,
  show: null,
  tvShows: [],
  cast: [],
  page: 1,
  error: false
};

const tvSlice = createSlice({
  name: "TV",
  initialState,
  reducers: {
    loadTv: (state) => {
      state.loading = true;
      state.error = false;
    },
    readTvShow: (state, action) => {
      state.loading = false;
      state.show = TVCollection(action.payload.result);
    },
    readTvShows: (state, action) => {
      state.loading = false;
      state.page = 2;
      state.show = null;
      state.cast = action.payload.casts;
      state.tvShows = TVCollections(action.payload.results);
    },
    paginateTvShows: (state, action) => {
      state.loading = false;
      state.page += 1;
      state.tvShows = [
        ...state.tvShows,
        ...TVCollections(action.payload.results)
      ];
    },
    errorTv: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
});

export const {
  loadTv,
  readTvShow,
  readTvShows,
  paginateTvShows,
  errorTv
} = tvSlice.actions;

export default tvSlice.reducer;
