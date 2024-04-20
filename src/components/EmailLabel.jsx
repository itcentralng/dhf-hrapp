import { Typography } from "@mui/material";
import React from "react";

const EmailLabel = ({ emailType }) => {
  return (
    <div
      style={{
        width: "118px",
        height: "32px",
        borderRadius: "4px",
        backgroundColor: "#98D7E4",
      }}
    >
      <Typography
        component="p"
        sx={{
          color: "black",
          fontWeight: 500,
          fontSize: "14px",
          textAlign: "center",
        }}
      >
        {emailType}
      </Typography>
    </div>
  );
};

export default EmailLabel;
