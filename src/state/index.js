import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { fetchUsers } from "./fetchUsers";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    fetchUsers: fetchUsers,
  },
});

export default store;
