import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import blogs from "./blogs";
import singleBlog from "./singleBlog";
import modal from "./modal";

const store = configureStore({
  reducer: {
    auth,
    blogs,
    singleBlog,
    modal,
  },
});

export default store;
