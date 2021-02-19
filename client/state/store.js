import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import * as reducers from "./ducks";

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
});

export default store;
