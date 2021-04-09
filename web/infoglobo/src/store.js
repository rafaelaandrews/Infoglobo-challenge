import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/news/SliceNews";

export default configureStore({
  reducer: {
    news: newsReducer,
  },
});