import { Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmailLabel from "./EmailLabel";
import AttachmentIcon from "@mui/icons-material/Attachment";

const text =
  "Non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia . Non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia . ";

const StyledText = styled("Typography")({
  fontSize: "14px",
  fontWeight: 400,
});

const EmailRow = () => {
  const [substring, setSubstring] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const calculateSubstring = () => {
    const windowWidth = window.innerWidth;
    let substringLength = Math.floor(windowWidth / 20);
    substringLength = Math.min(substringLength, text.length); // Ensure substring length doesn't exceed text length
    setSubstring(text.substring(0, substringLength));
  };

  const updateTimeOnMount = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Format hours to 12-hour format
    const formattedHours = hours % 12 || 12; // Handle midnight (0) as 12
    const formattedMinutes = minutes.toString().padStart(2, "0"); // Pad minutes with leading zero if needed

    setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
  };

  useEffect(() => {
    calculateSubstring();

    window.addEventListener("resize", calculateSubstring);

    return () => {
      window.removeEventListener("resize", calculateSubstring);
    };
  }, []);

  useState(() => {
    updateTimeOnMount();
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "82px",
        borderTop: "#EDEFF1 2px solid",
        px: "17px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isChecked ? "#DFECEB" : "white",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={{ width: "16.5px", height: "16.5px" }}
      />
      <Typography sx={{ fontWeight: 400, ml: "1%", mr: "5%", minWidth: "10%" }}>
        Admin Office
      </Typography>
      <EmailLabel emailType={"Leave Request"} />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          color: "#202124",
          ml: "0.5%",
        }}
      >
        Your account with us
      </Typography>
      <StyledText
        sx={{
          color: "rgba(0, 0, 0, 0.54)",
        }}
      >
        {`- ${substring}...`}
      </StyledText>
      <AttachmentIcon
        sx={{ color: "rgba(0, 0, 0, 0.54)", mx: "3%", cursor: "pointer" }}
      />
      <StyledText>{currentTime}</StyledText>
    </Stack>
  );
};

export default EmailRow;
