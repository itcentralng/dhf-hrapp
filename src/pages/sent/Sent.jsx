import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import StudyLeaveRow from "../../components/StudyLeaveRow";
import { useGetOutboxQuery } from "../../state/api";
import EarlyClosureRow from "../../components/EarlyClosureRow";
import EvaluationRow from "../../components/EvaluationRow";

const Sent = () => {
  const { data: mailInfo, isLoading, isError } = useGetOutboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching inbox data</div>;

  // Safely access mailInfo properties with default empty arrays
  const messages = mailInfo?.messages ?? [];
  const studyLeaves = mailInfo?.study_leaves ?? [];
  const earlyClosures = mailInfo?.early_closures ?? [];
  const evaluations = mailInfo?.evaluations ?? [];

  // Combine all messages into a single array with a type property
  const combinedMessages = [
    ...messages.map((item) => ({ ...item, type: "message" })),
    ...studyLeaves.map((item) => ({ ...item, type: "study_leave" })),
    ...earlyClosures.map((item) => ({ ...item, type: "early_closure" })),
    ...evaluations.map((item) => ({ ...item, type: "evaluation" })),
  ];

  // Sort the combined array by created_at in descending order
  combinedMessages.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  return (
    <Box>
      {combinedMessages.map((item) => {
        switch (item.type) {
          case "message":
            return (
              <Box key={item.message_id}>
                <EmailRow
                  sender={item.sender}
                  recipient={item.recipients}
                  label={item.label}
                  title={item.title}
                  text={item.text}
                  id={item.message_id}
                  created_at={item.created_at}
                  type="sent"
                />
              </Box>
            );
          case "study_leave":
            return (
              <Box key={item.id}>
                <StudyLeaveRow
                  recipient={item.applicant_name}
                  label={item.designation}
                  title="Study Leave"
                  text="Study Leave application"
                  id={item.id}
                  created_at={item.created_at}
                  type="sent"
                />
              </Box>
            );
          case "early_closure":
            return (
              <Box key={item.id}>
                <EarlyClosureRow
                  recipient="Next office"
                  label="Early closure notification"
                  title="Early Closure"
                  text="Early closure notification"
                  id={item.id}
                  created_at={item.created_at}
                  type="sent"
                />
              </Box>
            );
          case "evaluation":
            return (
              <Box key={item.id}>
                <EvaluationRow
                  recipient={item.supervisor}
                  label="Staff evaluation notification"
                  title="Staff Evaluation"
                  text="Staff evaluation notification"
                  id={item.id}
                  created_at={item.created_at}
                  type="sent"
                />
              </Box>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Sent;
