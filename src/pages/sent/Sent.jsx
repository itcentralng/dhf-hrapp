import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import mailInfo from "../../data/mailInfo";

const Sent = () => {
  return (
    <Box>
      {mailInfo
        .filter((item) => item.type === "sent")
        .map((item) => (
          <Box key={item.id}>
            <EmailRow {...item} />
          </Box>
        ))}
    </Box>
  );
};

export default Sent;
