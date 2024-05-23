import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import StudyLeaveRow from "../../components/StudyLeaveRow";
import { useGetInboxQuery } from "../../state/api";
import EarlyClosureRow from "../../components/EarlyClosureRow";
import EvaluationRow from "../../components/EvaluationRow";
// import { useSelector } from "react-redux";

const Inbox = () => {
  // const user = useSelector((state) => state.user.user);
  const { data: mailInfo, isLoading, isError } = useGetInboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching inbox data</div>;

  return (
    <Box>
      {mailInfo.messages.map((item) => (
        <Box key={item.message_id}>
          <EmailRow
            recipient={item.sender}
            label={item.label}
            title={item.title}
            text={item.text}
            id={item.message_id}
            created_at={item.created_at}
            type="inbox"
          />
        </Box>
      ))}

      {mailInfo.study_leaves.map((item) => (
        <Box key={item.id}>
          <StudyLeaveRow
            recipient={item.applicant_name}
            label={item.designation}
            title="Study Leave"
            text="Study Leave application"
            id={item.id}
            created_at={item.created_at}
            type="inbox"
          />
        </Box>
      ))}

      {mailInfo.early_closures.map((item) => (
        <Box key={item.id}>
          <EarlyClosureRow
            recipient={item.teacher}
            label="Early closure notification"
            title="Early Closure"
            text="Early closure notification"
            id={item.id}
            created_at={item.created_at}
            type="inbox"
          />
        </Box>
      ))}

      {mailInfo.evaluations.map((item) => (
        <Box key={item.id}>
          <EvaluationRow
            recipient={item.supervisor}
            label="Staff evaluation notification"
            title="Staff Evaluation"
            text="Staff evaluation notification"
            id={item.id}
            created_at={item.created_at}
            type="inbox"
          />
        </Box>
      ))}
    </Box>
  );
};

export default Inbox;
