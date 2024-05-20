import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("userState")) || {
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      localStorage.setItem("userState", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      localStorage.removeItem("userState");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
