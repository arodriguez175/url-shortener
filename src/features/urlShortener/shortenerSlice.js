import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shortenerSlice = createSlice({
  name: "shortener",
  initialState: {
    shortenedUrls: [],
  },
  reducers: {
    saveShortenedUrl: (state, action) => {
      state.shortenedUrls = [...state.shortenedUrls, action.payload];
    },
  },
});

export function shortenUrl(originalUrl) {
  return async (dispatch) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;
    axios
      .post(url)
      .then((response) => {
        const data = response.data;
        dispatch(saveShortenedUrl({
          originalUrl: originalUrl,
          shortenedUrl: data.result.full_short_link,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

export const { shorten, saveShortenedUrl } = shortenerSlice.actions;

export default shortenerSlice.reducer;
