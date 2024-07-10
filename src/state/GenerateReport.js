import { api } from "./api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["Reports"],
});

const reportApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    generateEvaluationReport: builder.mutation({
      query: (values) => ({
        url: "/generate-report/evaluations",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Reports", "Inbox", "Outbox"],
    }),
    generateStudyLeaveReport: builder.mutation({
      query: (values) => ({
        url: "/generate-report/study-leaves",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Reports", "Inbox", "Outbox"],
    }),
    generateEarlyClosureReport: builder.mutation({
      query: (values) => ({
        url: "/generate-report/early-closures",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["Reports", "Inbox", "Outbox"],
    }),
  }),
});

export const {
  useGenerateEvaluationReportMutation,
  useGenerateEarlyClosureReportMutation,
  useGenerateStudyLeaveReportMutation,
} = reportApiSlice;
