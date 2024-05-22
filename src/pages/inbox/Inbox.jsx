import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import { useGetInboxQuery } from "../../state/api";
import { useSelector } from "react-redux";

const Inbox = () => {
  const user = useSelector((state) => state.user.user);
  const { data: mailInfo, isLoading, isError } = useGetInboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching inbox data</div>;

  let messageType = "messages";

  if (mailInfo) {
    if (mailInfo.study_leaves && mailInfo.study_leaves.length > 0) {
      messageType = "study_leaves";
    } else if (mailInfo.early_closures && mailInfo.early_closures.length > 0) {
      messageType = "early_closures";
    } else if (mailInfo.evaluations && mailInfo.evaluations.length > 0) {
      messageType = "evaluations";
    }
  }

  return (
    <Box>
      {mailInfo[messageType]
        ?.filter(
          (item) => `${user.first_name} ${user.last_name}` !== item.sender
        )
        .map((item) => (
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
    </Box>
  );
};

export default Inbox;
