import { createSlice } from "@reduxjs/toolkit";
// import {
//   changePassword,
//   loginUser,
//   logoutUser,
//   registerUser,
// } from "../functions/auth";

const initialState = {
  loading: false,
  loginCredentials: {},
  error: null,
};

const auth = createSlice({
  name: "auth",
  initialState,

  // extraReducers: {
  //   [loginUser.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [loginUser.fulfilled]: (state, action) => {
  //     console.log(action.payload);
  //     state.loading = false;
  //     state.loginCredentials = action.payload;
  //   },
  //   [loginUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message;
  //   },
  //   [changePassword.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [changePassword.fulfilled]: (state, action) => {
  //     state.loading = false;
  //   },
  //   [changePassword.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message;
  //   },
  //   [registerUser.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [registerUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //   },
  //   [registerUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message;
  //   },

  //   [logoutUser.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [logoutUser.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.loginCredentials = null;
  //     console.log(
  //       "cikis yapildi ve state temizlendi. \n state:",
  //       state.loginCredentials
  //     );
  //   },
  //   [logoutUser.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message;
  //   },
  // },
});

export default auth.reducer;