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
  refetchOnReconnect: true,
  reducerPath: "hrApi",
  tagTypes: ["Users", "Inbox", "Outbox", "Comments"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "user/get-users",
      providesTags: ["Users"],
    }),
    getInbox: build.query({
      query: () => "messages/inbox/",
      providesTags: ["Inbox"],
    }),
    getOutbox: build.query({
      query: () => "messages/outbox/",
      providesTags: ["Outbox"],
    }),
    login: build.mutation({
      query: (values) => ({
        url: "/user/login/",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Users", "Inbox", "Outbox", "Comments"],
    }),
    registerStaff: build.mutation({
      query: (newStaff) => ({
        url: "user/signup/",
        method: "POST",
        body: newStaff,
      }),
      invalidatesTags: ["Users"],
    }),
    editUser: build.mutation({
      query: (formData) => ({
        url: "user/edit-user-details",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: build.mutation({
      query: (deletedUser) => ({
        url: "user/user",
        method: "DELETE",
        body: deletedUser,
      }),
      invalidatesTags: ["Users"],
    }),
    addComment: build.mutation({
      query: (commentItems) => ({
        url: "messages/comment/",
        method: "POST",
        body: commentItems,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});
export const {
  useGetUsersQuery,
  useGetInboxQuery,
  useGetOutboxQuery,
  useRegisterStaffMutation,
  useLoginMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useAddCommentMutation,
} = api;

export const { invalidateTags } = api.util;
