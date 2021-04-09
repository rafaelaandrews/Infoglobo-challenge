import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const news = await response.json();
  return news;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    newsAdded(state, action) {
      state.entities.push(action.payload);
    },
    newsUpdated(state, action) {
      const { id, title, content, publicationDate } = action.payload;
      const existingNews = state.entities.find((news) => news.id === id);
      if (existingNews) {
        existingNews.title = title;
        existingNews.content = content;
        existingNews.publicationDate = publicationDate;
      }
    },
    newsDeleted(state, action) {
      const { id } = action.payload;
      const existingNews = state.entities.find((news) => news.id === id);
      if (existingNews) {
        state.entities = state.entities.filter((news) => news.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchNews.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { newsAdded, newsUpdated, newsDeleted } = newsSlice.actions;

export default newsSlice.reducer;
