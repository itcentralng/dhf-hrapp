import { Box } from "@mui/material";
import EmailRow from "../../components/EmailRow";
import sentMailInfo from "../../data/sentMailInfo";

const Sent = () => {
  return (
    <Box>
      {sentMailInfo.map((item, id) => (
        <EmailRow key={id} {...item} />
      ))}
    </Box>
  );
};

export default Sent;
