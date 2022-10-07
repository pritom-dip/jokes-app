import { configureStore } from "@reduxjs/toolkit";
import jokesReducer from "./jokes/jokesSlice";
import reactionsReducer from "./reactions/reactionSlice";

export const store = configureStore({
  reducer: {
    jokes: jokesReducer,
    reactions: reactionsReducer,
  },
});
