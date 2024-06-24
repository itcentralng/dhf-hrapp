import { api } from "./api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["StudyLeave"],
});

const studyApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    submitLeave: builder.mutation({
      query: (values) => ({
        url: "/messages/submit-study-leave",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["StudyLeave", "Inbox", "Outbox"],
    }),
    hosStudyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-study-leave/${pathId}/hos`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["StudyLeave", "Inbox", "Outbox"],
    }),
    adminStudyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-study-leave/${pathId}/accountant`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["StudyLeave", "Inbox", "Outbox"],
    }),
    hrStudyResponse: builder.mutation({
      query: ({ values, pathId }) => ({
        url: `/messages/respond-study-leave/${pathId}/hr`,
        method: "PUT",
        body: { ...values },
      }),
      invalidatesTags: ["StudyLeave", "Inbox", "Outbox"],
    }),
  }),
});

export const {
  useSubmitLeaveMutation,
  useHosStudyResponseMutation,
  useAdminStudyResponseMutation,
  useHrStudyResponseMutation,
} = studyApiSlice;
