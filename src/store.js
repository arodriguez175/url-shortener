import { configureStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

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
