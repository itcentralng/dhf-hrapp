import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
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
    getInbox: build.query({
      query: () => "messages/inbox/",
    }),
    getOutbox: build.query({
      query: () => "messages/outbox/",
    }),
    registerStaff: build.mutation({
      query: (newStaff) => ({
        url: "user/signup/",
        method: "POST",
        body: newStaff,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetInboxQuery,
  useGetOutboxQuery,
  useRegisterStaffMutation,
} = api;
