import { configureStore, createStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";
import shortenerSlice from "./features/urlShortener/shortenerSlice";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    shortener: shortenerReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
