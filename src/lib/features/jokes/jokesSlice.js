import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FETCH_DATA = 15;

const initialState = {
  loading: true,
  error: "",
  data: {
    categories: [],
    results: [],
    filteredData: [],
  },
  fetchedCount: 0,
  total: 0,
  searchedData: [],
  joke: {},
};

export const fetchAllJokes = createAsyncThunk(
  "jokes/fetchAllJokes",
  async (undefined, { rejectWithValue }) => {
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
      total: data?.total,
    };
  }
);

export const searchJokesByName = createAsyncThunk(
  "jokes/searchJokesByName",
  async (text, { rejectWithValue }) => {
    const { data, status } = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${text}`
    );

    if (status < 200 || status >= 300) {
      return rejectWithValue(data);
    }

    return data.result;
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
    fetchMoreData: (state) => {
      const newCount = state.fetchedCount + FETCH_DATA;
      const fetchedData = [...state.data.results].slice(0, newCount);
      state.fetchedCount = newCount;
      state.data.filteredData = fetchedData;
    },
    getSingleJoke: (state, action) => {
      const joke = state?.data?.results?.find((j) => j.id === action.payload);
      state.joke = joke;
    },
    filterCategoryByEmpty: (state) => {
      const filteredJokes = state.data.results?.filter(
        (joke) => joke?.categories?.length === 0
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
      state.searchedData = [];
      state.fetchedCount = 0;
      state.total = 0;
    },
    [fetchAllJokes.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.data.categories = action.payload.categories;
      state.data.results = action.payload.jokes;
      state.data.filteredData = [...action.payload.jokes].slice(0, FETCH_DATA);
      state.fetchedCount = FETCH_DATA;
      state.searchedData = [];
      state.total = action.payload.total;
    },
    [fetchAllJokes.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.error?.message || "something went wrong";
      state.data.categories = [];
      state.data.results = [];
      state.data.filteredData = [];
      state.searchedData = [];
      state.fetchedCount = 0;
      state.total = 0;
    },
    [searchJokesByName.fulfilled]: (state, action) => {
      state.searchedData = action.payload;
    },
  },
});

export const {
  filterByCategory,
  fetchMoreData,
  getSingleJoke,
  filterCategoryByEmpty,
} = jokesSlice.actions;

export default jokesSlice.reducer;
