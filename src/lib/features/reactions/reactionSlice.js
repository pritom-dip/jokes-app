import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    giveLike: (state, action) => {
      if (
        state?.data?.[action.payload] &&
        state?.data?.[action.payload]?.like
      ) {
        state.data[action.payload].like += 1;
      } else {
        state.data[action.payload] = { like: 1 };
      }
    },
    giveDislike: (state, action) => {
      if (
        state?.data?.[action.payload] &&
        state?.data?.[action.payload]?.dislike
      ) {
        state.data[action.payload].dislike += 1;
      } else {
        state.data[action.payload] = { dislike: 1 };
      }
    },
  },
});

export const { giveLike, giveDislike } = reactionsSlice.actions;

export default reactionsSlice.reducer;
