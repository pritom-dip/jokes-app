import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./jokes/jokesSlice";

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});
