import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/axiosInterceptor";
import { toastSuccessNotify, toastWarnNotify } from "../utils/customToastify";

export const mainBlogs = createAsyncThunk("blog/blog", async () => {
  let res = await api.get(`blog/blog/`);
  return res.data;
});

export const CreatePostBlogs = createAsyncThunk(
  "auth/changePassword",
  async ({ data, token, navigate }) => {
    await api
      .post("/blog/blog/", data, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(function (response) {
        if (!!response.data.id) {
          toastSuccessNotify("Your blog added successfully");
          navigate("/", { replace: true });
        } else toastWarnNotify("Opps someting wrong please try again");
      })
      .catch(function (error) {
        toastWarnNotify(error);
      });
  }
);




