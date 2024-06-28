import { api } from "./api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["StaffEvaluation"],
});

const evaluationApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    submitEvaluation: builder.mutation({
      query: (values) => ({
        url: "/messages/perform-evaluation",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["StaffEvaluation", "Inbox", "Outbox"],
    }),
  }),
});

export const { useSubmitEvaluationMutation } = evaluationApiSlice;
