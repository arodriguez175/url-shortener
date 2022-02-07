import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const shortenerSlice = createSlice({
  name: "shortener",
  initialState: {
    shortenedUrls: [],
  },
  reducers: {
    shorten: (state, action) => {
      const url = `https://api.shrtco.de/v2/shorten?url=${action.payload}`;
      axios
        .post(url)
        .then((response) => {
          const data = response.data;
          const newUrlObject = {
            originalUrl: action.payload,
            shortenedUrl: data.result.full_short_link,
          };
          state.shortenedUrls.append(newUrlObject);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("hello");
    },
  },
});

export const { shorten } = shortenerSlice.actions;

export default shortenerSlice.reducer;
