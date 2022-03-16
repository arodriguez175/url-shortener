import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* A "slice" is a collection of Redux reducer logic and actions
  for a single feature in the app */
export const shortenerSlice = createSlice({
  // The beginning state of the shortener slice
  name: "shortener",
  initialState: {
    shortenedUrls: [],
    isLoading: false,
  },

  /* A reducer takes the state and action of the application 
  and returns the new state. */
  reducers: {
    saveShortenedUrl: (state, action) => {
      state.shortenedUrls = [...state.shortenedUrls, action.payload];
    },
    setLoading: (state, action) => {
      console.log(action);
      state.isLoading = action.payload;
    },
    deleteShortenedUrl: (state, action) => {
      // do a splice on shortenedUrls to remove 1 item
      // action.payload.index

      // array = [1, 2, 3]
      /* const removeItemFromArray = (index) => {
        array = array.splice(index, 1)
      }*/
      const array = state.shortenedUrls;
      const index = action.payload.index;
      state.shortenedUrls = array.splice(index, 1);
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

export const { saveShortenedUrl, setLoading, deleteShortenedUrl } = shortenerSlice.actions;

export default shortenerSlice.reducer;
