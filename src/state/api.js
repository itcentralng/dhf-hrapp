import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token; // Ensure correct state path

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    } else {
      console.log("Token not found");
    }

    return headers;
  },
});

export const api = createApi({
  baseQuery,
  reducerPath: "hrApi",
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "user/get-users",
    }),
  }),
});

export const { useGetUsersQuery } = api;
