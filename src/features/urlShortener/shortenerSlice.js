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
      state.isLoading = action.payload;
    },
    deleteShortenedUrl: (state, action) => {
      // do a splice on shortenedUrls to remove 1 item
      // action.payload.index

      // array = [1, 2, 3]
      /* const removeItemFromArray = (index) => {
        array = array.splice(index, 1)
      }*/
      const array = [...state.shortenedUrls];
      const index = action.payload;
      array.splice(index, 1);
      state.shortenedUrls = array;
    },
  },
});

export function shortenUrl(originalUrl) {
  // async makes a function return a Promise.
  return async (dispatch) => {
    /* assigning url as the shrtco API base url 
    and assigning that to my original url. */
    const url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

    /* dispatch is a function of the Redux store and 
    is used to dispatch an action. 
    This is the only way to trigger a state change.
    
    setLoading is just a variable name for React's built-in 
    useState hook. 
    This setter function can be called anything. 
    Used to describe the status of async requests for 
    the purpose of updating the UI to show that the request is 
    happening. (eg put up a spinner, disable submit buttons, etc) */
    dispatch(setLoading(true));

    /* axios is a promise based HTTP client 
    for the browser and node.js that is able to send 
    a request to and get a response from the server in 
    HTTP format. */
    axios
      /* post sends data to the API server to create or update a resource. 
      Sends my url data to the axios server. */
      .post(url)

      /* then returns a promise that takes two arguments: callback functions for 
      the success and failure cases of the promise. */
      .then((response) => {
        //axios response data.
        /* response: {
          data: {...},
          ...
        }*/
        const data = response.data;
        const shortenedUrlObject = {
          originalUrl: originalUrl,
          // full short link from response data.
          shortenedUrl: data.result.full_short_link,
        };

        // Dispatch action to save shortened url.
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

export const { saveShortenedUrl, setLoading, deleteShortenedUrl } =
  shortenerSlice.actions;

// Export the store shortener slice reducer.
export default shortenerSlice.reducer;
