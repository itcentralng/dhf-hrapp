import { Box, Typography } from "@mui/material";
import React from "react";

const EmailLabel = ({ emailType }) => {
  return (
    <Box
      style={{
        width: "118px",
        height: "32px",
        borderRadius: "4px",
        backgroundColor: "#98D7E4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: ".2em .5em",
      }}
    >
      <Typography
        component="p"
        sx={{
          color: "black",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "11px",
          textAlign: "center",
        }}
      >
        {emailType}
      </Typography>
    </Box>
  );
};

export default EmailLabel;
