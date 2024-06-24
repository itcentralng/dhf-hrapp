import { api } from "./api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["EarlyClosure"],
});

const closureApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    submitClosure: builder.mutation({
      query: (values) => ({
        url: "/messages/submit-early-closure",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["EarlyClosure", "Inbox", "Outbox"],
    }),
    hosEarlyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-early-closure/${pathId}/hos`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["EarlyClosure", "Inbox", "Outbox"],
    }),
    hrEarlyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-early-closure/${pathId}/hr`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["EarlyClosure", "Inbox", "Outbox"],
    }),
    adminEarlyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-early-closure/${pathId}/director`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["EarlyClosure", "Inbox", "Outbox"],
    }),
  }),
});

export const {
  useSubmitClosureMutation,
  useHosEarlyResponseMutation,
  useHrEarlyResponseMutation,
  useAdminEarlyResponseMutation,
} = closureApiSlice;
