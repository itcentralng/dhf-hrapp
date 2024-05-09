/* eslint-disable react/prop-types */
import { Box, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import EmailLabel from "./EmailLabel";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { useNavigate } from "react-router-dom/dist";

const StyledText = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
});

const EmailRow = ({ recipient, label, title, text, id, type }) => {
  const [substring, setSubstring] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

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
        height: "82px",
        borderTop: isChecked ? "#3C40434D 1px solid" : "#EDEFF1 1px solid",
        borderBottom: isChecked ? "#3C40434D 1px solid" : "#EDEFF1 1px solid",
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
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/${type}/message/${id}`)}
      >
        <Typography
          sx={{ fontWeight: 400, ml: "1%", mr: "5%", minWidth: "10%" }}
        >
          {recipient}
        </Typography>
        <EmailLabel emailType={label} />
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            color: "#202124",
            ml: "0.5%",
          }}
        >
          {title}
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
        <StyledText sx={{ fontFamily: "DM sans" }}>{currentTime}</StyledText>
      </Box>
    </Stack>
  );
};

export default EmailRow;
