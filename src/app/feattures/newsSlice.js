import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saved: [],
  searchResults: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    saveArticle: (state, action) => {
      state.saved.push(action.payload);
    },
    removeArticle: (state, action) => {
      state.saved = state.saved.filter(
        (article) => article.url !== action.payload.url
      );
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { saveArticle, removeArticle, setSearchResults } = newsSlice.actions;
export const selectSaved = (state) => state.news.saved;
export const selectSearchResults = (state) => state.news.searchResults;
export default newsSlice.reducer;