import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import blogs from "./blogs";
import singleBlog from "./singleBlog";
import likes from "./likes";
import modal from "./modal";

const store = configureStore({
  reducer: {
    auth,
    blogs,
    singleBlog,
    likes,
    modal,
  },
});

export default store;
