// /src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
