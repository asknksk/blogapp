import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/axiosInterceptor";
import { toastErrorNotify, toastSuccessNotify } from "../utils/customToastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ data }) => {
    await api
      .post("users/register/", data)
      .then(function (response) {
        toastSuccessNotify("Success! ");
      })
      .catch(function (error) {
        toastErrorNotify(error);
      });
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ data, navigate },  /**thunkApi object */) => {
    let res = await api.post("/users/auth/login/", data);

    if (res.status === 200 && !!res.data) {
      localStorage.setItem("loginCredentials", JSON.stringify(res.data));
      //backenddeki messages duzeltildikten sonra burada da duzeltilecek
      toastSuccessNotify("Login successfully...");

      navigate("/", { replace: true });
    } else {
      toastErrorNotify("Oppss... Check your information.");
      
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ token, navigate }) => {
    let res = await api.post(
      "/users/auth/logout/",
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 200 && !!res.data.detail) {
      localStorage.removeItem("loginCredentials");
      toastSuccessNotify(res.data.detail);
      navigate("/");
    } else {
      toastErrorNotify("Oppss error... Please try again/later..");
    }
  }
);