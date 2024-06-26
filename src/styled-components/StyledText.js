import { Typography, styled } from "@mui/material";

const HeadingText = styled(Typography)({
  fontWeight: 500,
  fontSize: "20px",
  fontFamily: "DM Sans",
  color: "black",
});

const SubHeadingText = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "16px",
  color: "#4B5563",
});

const InputLabel = styled(Typography)({
  fontFamily: "DM sans",
  fontWeigth: 400,
  fontSize: "14px",
  color: "black",
});

export { HeadingText, SubHeadingText, InputLabel };
