import { api } from "./api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["BlankMessage"],
});

const messageApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    submitMessage: builder.mutation({
      query: (formData) => ({
        url: "/messages/upload-document/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["BlankMessage", "Inbox", "Outbox"],
    }),
  }),
});

export const { useSubmitMessageMutation } = messageApiSlice;
