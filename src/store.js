import { configureStore } from "@reduxjs/toolkit";
import shortenerReducer from "./features/urlShortener/shortenerSlice";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

const persistedState = loadState();

const store = configureStore({
  /* Connecting the shortener slice to the main store, 
  so it's available in the whole application whenever needed */
  reducer: {
    shortener: shortenerReducer, // ShortenerReducer is the slice's reducer
  },
  preloadedState: persistedState, // Saved state
});

/* The saveState function is inside the store.subscribe listener 
so it's called everytime there is a change to the store. */

/* Throttle is allowing a wait time of 1 second before allowing 
the saveState function available to run again */

/* Pass the current state of the store into saveState */
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
