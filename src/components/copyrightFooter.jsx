import { Box, Typography } from "@mui/material";
import React from "react";

const CopyrightFooter = () => {
  return (
    <Box
      sx={{
        width: "full",
        bgcolor: "white",
        height: "115px",
        maxHeight: "115px",
        borderTop: "#CCCCCC 1px solid",
        mt: "auto",
        mb: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "black",
        }}
      >
        2024 Darul Huda HR APP.
      </Typography>
    </Box>
  );
};

export default CopyrightFooter;
