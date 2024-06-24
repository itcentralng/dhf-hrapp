import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import StudyLeaveRow from "../../components/StudyLeaveRow";
import { useGetOutboxQuery } from "../../state/api";
import EarlyClosureRow from "../../components/EarlyClosureRow";
import EvaluationRow from "../../components/EvaluationRow";

const Sent = () => {
  const { data: mailInfo, isLoading, isError } = useGetOutboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching outbox data</div>;

  // Combine all items into a single array
  const allItems = [
    ...(mailInfo?.messages ?? []).map((item) => ({
      ...item,
      itemType: "message",
    })),
    ...(mailInfo?.study_leaves ?? []).map((item) => ({
      ...item,
      itemType: "study_leave",
    })),
    ...(mailInfo?.early_closures ?? []).map((item) => ({
      ...item,
      itemType: "early_closure",
    })),
    ...(mailInfo?.evaluations ?? []).map((item) => ({
      ...item,
      itemType: "evaluation",
    })),
  ];

  // Sort the combined array based on updated_at
  const sortedItems = allItems.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );

  return (
    <Box>
      {sortedItems.map((item) => {
        switch (item.itemType) {
          case "message":
            return (
              <EmailRow
                key={item.message_id}
                sender={item.sender}
                recipient={item.recipients}
                label={item.label}
                title={item.title}
                text={item.text}
                id={item.message_id}
                updated_at={item.updated_at}
                type="sent"
              />
            );
          case "study_leave":
            return (
              <StudyLeaveRow
                key={item.id}
                recipient="Next office"
                label={item.designation}
                title="Study Leave"
                text="Study Leave application"
                id={item.id}
                updated_at={item.updated_at}
                type="sent"
              />
            );
          case "early_closure":
            return (
              <EarlyClosureRow
                key={item.id}
                recipient="Next office"
                label="Early closure notification"
                title="Early Closure"
                text="Early closure notification"
                id={item.id}
                updated_at={item.updated_at}
                type="sent"
              />
            );
          case "evaluation":
            return (
              <EvaluationRow
                key={item.id}
                recipient={item.supervisor}
                label="Staff evaluation notification"
                title="Staff Evaluation"
                text="Staff evaluation notification"
                id={item.id}
                updated_at={item.updated_at}
                type="sent"
              />
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Sent;
