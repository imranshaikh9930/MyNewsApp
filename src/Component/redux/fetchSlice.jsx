import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    error: null,
    status: 'idle', // Initialize with a default status
    search: "",
    articleDetails: null
  },
  reducers: {
    fetchArticleStart: (state) => {
      state.status = "loading";
      state.error = null;
    },
    fetchArticleSuccess: (state, action) => {
      state.status = "succeeded";
      state.articles = action.payload; // No need for spread operator here
      state.error = null;
    },
    fetchArticleFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    searchValue: (state, action) => {
      state.search = action.payload;
    },
    setArticleDetails: (state, action) => { // Renamed to setArticleDetails for clarity
      state.articleDetails = action.payload;
    }
  },
});

// Destructure and export the action creators
export const {
  fetchArticleStart,
  fetchArticleSuccess,
  fetchArticleFailure,
  searchValue,
  setArticleDetails
} = fetchSlice.actions;

export default fetchSlice.reducer;
