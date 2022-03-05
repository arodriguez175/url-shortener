import { configureStore, createStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";
import { createStoreHook } from "react-redux";
import shortenerSlice from "./features/urlShortener/shortenerSlice";

export default configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
});

const persistedState = loadState();
const store = createStore(shortenerSlice, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      shortenedUrls: [],
    });
  }, 1000)
);
