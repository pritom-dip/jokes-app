import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  data: {
    categories: [],
    results: [],
    filteredData: [],
  },
};

export const fetchAllJokes = createAsyncThunk(
  "jokes/fetchAllJokes",
  async (value, { rejectWithValue }) => {
    const getAllData = () =>
      axios.get(`https://api.chucknorris.io/jokes/search?query=all`);

    const getAllCategories = () =>
      axios.get(`https://api.chucknorris.io/jokes/categories`);

    const [{ data, status }, { data: categories, status: categoryStatus }] =
      await Promise.all([getAllData(), getAllCategories()]);

    if (
      status < 200 ||
      status >= 300 ||
      categoryStatus < 200 ||
      categoryStatus >= 300
    ) {
      return rejectWithValue(data);
    }

    return {
      jokes: data?.result || [],
      categories: categories || [],
    };
  }
);

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const filteredJokes = state.data.results?.filter((joke) =>
        joke?.categories?.includes(action.payload)
      );
      state.data.filteredData = filteredJokes;
    },
  },
  extraReducers: {
    [fetchAllJokes.loading]: (state, action) => {
      state.loading = true;
      state.error = "";
      state.data.categories = [];
      state.data.results = [];
      state.data.filteredData = [];
    },
    [fetchAllJokes.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.data.categories = action.payload.categories;
      state.data.results = action.payload.jokes;
      state.data.filteredData = action.payload.jokes;
    },
    [fetchAllJokes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.error?.message || "something went wrong";
      state.data.categories = [];
      state.data.results = [];
      state.data.filteredData = [];
    },
  },
});

export const { filterByCategory } = jokesSlice.actions;

export default jokesSlice.reducer;
