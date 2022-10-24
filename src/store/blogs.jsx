import { createSlice } from "@reduxjs/toolkit";
import { mainBlogs, CreatePostBlogs, PatchBlog, AddComment } from "../functions/mainBlogs";

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
    [PatchBlog.pending]: (state, action) => {
      state.loading = true;
    },
    [PatchBlog.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [PatchBlog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [AddComment.pending]: (state, action) => {
      state.loading = true;
    },
    [AddComment.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [AddComment.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
 
  },
});

export default blogs.reducer;
