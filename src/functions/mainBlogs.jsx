import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/axiosInterceptor";
import { toastSuccessNotify, toastWarnNotify } from "../utils/customToastify";

export const mainBlogs = createAsyncThunk("blog/blog", async () => {
  let res = await api.get(`blog/blog/`);
  return res.data;
});
export const singleBlogDetail = createAsyncThunk(
  "blog/blog/id",
  async ({ id, token }) => {
    let res = await api.get(`blog/blog/${id}/`, {
      headers: {
        Authorization: "Token " + token,
      },
    });
    if (res.status === 200) {
      return res.data;
    }
  }
);

export const CreatePostBlogs = createAsyncThunk(
  "blog/blog/",
  async ({ data, token, navigate }) => {
    console.log(data)
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

export const PatchBlog = createAsyncThunk(
  "blog/blog/",
  async ({ data, token, blog_id, navigate }) => {
    await api
      .patch(`/blog/blog/${blog_id}/`, data, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(function (response) {
        if (!!response.data.id) {
          toastSuccessNotify("Changes completed successfully");
          navigate("/");
        } else toastWarnNotify("Opps someting wrong please try again");
      })
      .catch(function (error) {
        toastWarnNotify(error);
      });
  }
);

export const AddComment = createAsyncThunk(
  "blog/comments/",
  async ({ data, token, id }) => {
    await api
      .post(`/blog/comments/${id}/`, data, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(function (response) {
        if (!!response.data.id) {
          toastSuccessNotify("Your comment has been successfully added.");
        } else toastWarnNotify("Opps someting wrong please try again");
      })
      .catch(function (error) {
        toastWarnNotify(error);
      });
  }
);
export const DeleteBlog = createAsyncThunk(
  "blog/delete/",
  async ({token, id }) => {
    await api
      .delete(`/blog/blog/${id}/`, {}, {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then(function (response) {
        if (response.status === 204) {
          toastSuccessNotify("Your blog successfully deleted ");
        } else toastWarnNotify("Opps someting wrong please try again");
      })
      .catch(function (error) {
        toastWarnNotify(error);
      });
  }
);
export const LikeFunction = createAsyncThunk(
  "/blog/likes/post",
  async ({ token, blog_id }) => {
    await api
      .post(`/blog/likes/${blog_id}/`, {}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then(function (response) {
        if (!!response.data) {
        } else toastWarnNotify("Opps someting wrong please try again");
        return response.data;
      })
      
  }
);