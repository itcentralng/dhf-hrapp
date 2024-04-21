import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import mailInfo from "../../data/mailInfo";

const Inbox = () => {
  return (
    <Box>
      {mailInfo.map((item, id) => (
        <EmailRow key={id} {...item} />
      ))}
    </Box>
  );
};

export default Inbox;
