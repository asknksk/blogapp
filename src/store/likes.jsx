import { createSlice } from "@reduxjs/toolkit";
import { GetLikeFunction, LikeFunction } from "../functions/mainBlogs";

const initialState = {
  loading: false,
  error: null,
  likes: [],
};

const likes = createSlice({
  name: "likes",
  initialState,

  extraReducers: {
   
    [GetLikeFunction.pending]: (state, action) => {
      state.loading = true;
      console.log(action.payload)
    },
    [GetLikeFunction.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.likes = action.payload;
    },
    [GetLikeFunction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default likes.reducer;
