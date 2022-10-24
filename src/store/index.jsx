import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import blogs from "./blogs";
import singleBlog from "./singleBlog";

const store = configureStore({
  reducer: {
    auth,
    blogs,
    singleBlog,
  },
});

export default store;
