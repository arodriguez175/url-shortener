import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* My Redux slice storing reducer logic and actions for the shorten feature */
export const shortenerSlice = createSlice({
  // The beginning state of the shortener slice
  name: "shortener",
  initialState: {
    shortenedUrls: [],
    isLoading: false,
  },

  /* Each reducer takes the state and action of the application 
  and returns the new state. */
  reducers: {
    saveShortenedUrl: (state, action) => {
      /* Assigns an array to this state and spread individual shortened urls into 
      this array along with a payload (data from a Redux action object) */
      state.shortenedUrls = [...state.shortenedUrls, action.payload];
    },
    setLoading: (state, action) => {
      // isLoading accepts a payload
      state.isLoading = action.payload;
    },
    deleteShortenedUrl: (state, action) => {
      const array = [...state.shortenedUrls];
      const index = action.payload;
      // Remove 1 element (Url) from the array of shortened urls
      array.splice(index, 1);
      state.shortenedUrls = array;
    },
  },
});

export function shortenUrl(originalUrl) {
  // async makes my function return a Promise.
  return async (dispatch) => {
    /* assigns url as the shrtco API base url 
    and assigning that to my original url. */
    const url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

    /* dispatch setLoading action */
    dispatch(setLoading(true));

    axios
      /* Sends my url data to the axios server */
      .post(url)

      /* After receiving a response from the shrtco API, 
      there will be a result property from an object and inside 
      this result property there will be a property called full_short_link. 
      This will be the shortned url that we need. */
      .then((response) => {
        const data = response.data;
        const shortenedUrlObject = {
          originalUrl: originalUrl,
          // full short link from response data.
          shortenedUrl: data.result.full_short_link,
        };

        // Dispatch the action to save shortened url to the store
        dispatch(saveShortenedUrl(shortenedUrlObject));
      })
      .catch(function (error) {
        console.log(error);
      })
      /*  */
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

// Action creators are generated for each case reducer
export const { saveShortenedUrl, setLoading, deleteShortenedUrl } =
  shortenerSlice.actions;

// Export the shortener slice reducer to the store
export default shortenerSlice.reducer;
