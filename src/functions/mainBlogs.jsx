import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/axiosInterceptor";

export const mainBlogs = createAsyncThunk("blog/blog", async () => {
  let res = await api.get(`blog/blog/`);
  return res.data;
});
