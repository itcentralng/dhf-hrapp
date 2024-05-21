// Sent.jsx
import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import { useSelector } from "react-redux";
import { useGetOutboxQuery } from "../../state/api";

const Sent = () => {
  const user = useSelector((state) => state.user.user);
  const { data: mailInfo, isLoading, isError } = useGetOutboxQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching sent data</div>;

  // Check if mailInfo is an object and has messages array
  const messages = Array.isArray(mailInfo?.messages) ? mailInfo.messages : [];

  return (
    <Box>
      {messages
        .filter(
          (item) => `${user.first_name} ${user.last_name}` === item.sender
        )
        .map((item) => (
          <Box key={item.message_id}>
            <EmailRow
              recipient={item.recipients.join(", ")}
              label={item.label}
              title={item.title}
              text={item.text}
              id={item.message_id}
              type="sent"
            />
          </Box>
        ))}
    </Box>
  );
};

export default Sent;
