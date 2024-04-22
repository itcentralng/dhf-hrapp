import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import mailInfo from "../data/mailInfo";
import { Stack, Typography } from "@mui/material";
import EmailLabel from "./EmailLabel";
import DateComponent from "./Date";
const SingleEmailSubject = ({ id }) => {
  const [sender, setSender] = useState(mailInfo[0]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "24px 20px",
        borderTop: "rgba(237, 239, 241, 1) 1px solid",
        width: "99%",
      }}
    >
      <Stack direction="row" gap={1} sx={{}}>
        <AccountCircleIcon
          sx={{ width: "52px", height: "52px", color: "rgba(0, 0, 0, 0.05)" }}
        />
        <Stack direction="column">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "22px",
              fontFamily: "DM sans",
              color: "rgba(32, 33, 36, 1)",
            }}
          >
            {sender.sender}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              fontFamily: "DM sans",
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >{`to ${sender.recipient}`}</Typography>
        </Stack>
        <EmailLabel emailType={sender.label} />
      </Stack>
      <DateComponent />
    </div>
  );
};

export default SingleEmailSubject;
