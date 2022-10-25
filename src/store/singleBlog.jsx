import { createSlice } from "@reduxjs/toolkit";
import {  singleBlogDetail } from "../functions/mainBlogs";

const initialState = {
  loading: false,
  singleBlogData: [],
  error: null,
};

const singleBlog = createSlice({
  name: "singleBlog",
  initialState,

  extraReducers: {
    [singleBlogDetail.pending]: (state, action) => {
      state.loading = true;
    },
    [singleBlogDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleBlogData = action.payload;
    },
    [singleBlogDetail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default singleBlog.reducer;
