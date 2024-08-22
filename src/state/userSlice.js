// src/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(sessionStorage.getItem("userState")) || {
  isAuth: false,
  user: null,
  token: null, // Ensure the token is part of the initial state
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user_details;
      state.token = action.payload.access_token; // Set the token on login
      sessionStorage.setItem("userState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.token = null; // Clear the token on logout
      sessionStorage.clear();
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
