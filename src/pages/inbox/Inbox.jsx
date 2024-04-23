import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import mailInfo from "../../data/mailInfo";

const Inbox = () => {
  return (
    <Box>
      {mailInfo
        .filter((item) => item.type === "inbox")
        .map((item) => (
          <Box key={item.id}>
            <EmailRow {...item} />
          </Box>
        ))}
    </Box>
  );
};

export default Inbox;
