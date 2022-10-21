import { createSlice } from "@reduxjs/toolkit";
import { mainBlogs } from "../functions/mainBlogs";

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
      console.log(action.payload);
      state.loading = false;
      state.blogs = action.payload;
    },
    [mainBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
 
  },
});

export default blogs.reducer;
