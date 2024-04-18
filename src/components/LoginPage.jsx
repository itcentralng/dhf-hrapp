import { Box } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm";
import CopyrightFooter from "./copyrightFooter";

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: "1117px",
        width: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#F9F9F9",
        pt: "250px",
      }}
    >
      <LoginForm />
      <CopyrightFooter />
    </Box>
  );
};

export default LoginPage;
