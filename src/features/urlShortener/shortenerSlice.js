import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shortenerSlice = createSlice({
  /* A "slice" is a collection of Redux reducer logic and actions
  for a single feature in the app */

  name: "shortener",
  initialState: {
    shortenedUrls: [],
    isLoading: false,
  },
  // The beginning state of the shortener slice

  reducers: {
    /* A reducer takes the state and action of the application 
    and returns the new state. */

    saveShortenedUrl: (state, action) => {
      state.shortenedUrls = [...state.shortenedUrls, action.payload];
    },
    setLoading: (state, action) => {
      console.log(action);
      state.isLoading = action.payload;
    },
  },
});

export function shortenUrl(originalUrl) {
  return async (dispatch) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;
    dispatch(setLoading(true));
    axios
      .post(url)
      .then((response) => {
        /* response: {
          data: {...},
          ...
        }*/
        const data = response.data;
        const shortenedUrlObject = {
          originalUrl: originalUrl,
          shortenedUrl: data.result.full_short_link,
        };
        dispatch(saveShortenedUrl(shortenedUrlObject));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export const { saveShortenedUrl, setLoading } = shortenerSlice.actions;

export default shortenerSlice.reducer;
