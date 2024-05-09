import React from "react";
import confirmationIcon from "../assets/confirmationIcon.svg";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { Box } from "@mui/material";

const ConfirmationPopup = ({ text }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        ml: "-100px",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          width: "380px",
          height: "330px",
          padding: "53px 43px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={confirmationIcon} />
        <HeadingText sx={{ fontSize: "20px", my: "30px" }}>Success</HeadingText>
        <SubHeadingText
          sx={{ fontSize: "14px", color: "black", textAlign: "center" }}
        >
          {text}
        </SubHeadingText>
      </Box>
    </Box>
  );
};

export default ConfirmationPopup;
