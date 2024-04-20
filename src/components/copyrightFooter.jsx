import { Box, Typography } from "@mui/material";

const CopyrightFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "white",
        height: "10%",

        borderTop: "#CCCCCC 1px solid",
        mt: "auto",
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
        &copy; {new Date().getFullYear()} Darul Huda HR APP.
      </Typography>
    </Box>
  );
};

export default CopyrightFooter;
