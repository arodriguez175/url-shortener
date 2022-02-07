import { configureStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";

export default configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
});
