import React from "react";
import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import { useSelector } from "react-redux";
import { useGetOutboxQuery } from "../../state/api";

const Sent = () => {
  const user = useSelector((state) => state.user.user);
  const { data: mailInfo, isLoading, isError } = useGetOutboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching sent data</div>;

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

  const sentMessages = mailInfo[messageType].filter(
    (item) => item.sender === `${user.first_name} ${user.last_name}`
  );

  return (
    <Box>
      {sentMessages.map((item) => (
        <Box key={item.message_id}>
          <EmailRow
            recipient={item.recipients.join(", ")}
            label={item.label}
            title={item.title}
            text={item.text}
            id={item.message_id}
            created_at={item.created_at}
            type="sent"
          />
        </Box>
      ))}
    </Box>
  );
};

export default Sent;
