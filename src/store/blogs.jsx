import { createSlice } from "@reduxjs/toolkit";
import { mainBlogs, CreatePostBlogs } from "../functions/mainBlogs";

const initialState = {
  loading: false,
  blogs: [],
  error: null,
};

const blogs = createSlice({
  name: "blogs",
  initialState,

  extraReducers: {
    [mainBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [mainBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [mainBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [CreatePostBlogs.pending]: (state, action) => {
      state.loading = true;
    },
    [CreatePostBlogs.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [CreatePostBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
 
  },
});

export default blogs.reducer;
