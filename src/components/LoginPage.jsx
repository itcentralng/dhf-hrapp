import { Box } from "@mui/material";
import LoginForm from "./LoginForm";
import CopyrightFooter from "./copyrightFooter";

const LoginPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#F9F9F9",
      }}
    >
      <LoginForm />
      <CopyrightFooter />
    </Box>
  );
};

export default LoginPage;
