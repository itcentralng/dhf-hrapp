// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   users: null,
//   error: "",
// };

// export const fetchUsers = createAsyncThunk(
//   "user/fetchUsers",
//   async (_, thunkAPI) => {
//     const accessToken = sessionStorage.getItem("userState")
//       ? JSON.parse(sessionStorage.getItem("userState")).user.access_token
//       : null;

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_APP_API_URL}/user/get-users`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("failed to fetch users");
//       }
//       const users = await response.json();
//       console.log("Users: ", users.data);
//       return users.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// const fetchUserSlice = createSlice({
//   name: "getUsers",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.users = [];
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// export const { updateUsersList } = fetchUserSlice.actions;
// export default fetchUserSlice.reducer;
