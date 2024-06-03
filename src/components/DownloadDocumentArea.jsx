import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography, Button } from "@mui/material";

const DownloadDocumentArea = ({
  file,
  sender,
  handleTemplateOpen,
  messageType,
}) => {
  const [sentFileName, setSentFileName] = useState("");
  const [fileLink, setFileLink] = useState("");

  if (!file) {
    return <Typography>No document available for download.</Typography>;
  } else {
    setFileLink(file);
    setSentFileName(file.substring(file.lastIndexOf("-") + 1));
  }

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = fileLink;
    downloadLink.setAttribute("download", sentFileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    console.log(sentFileName);
    console.log(fileLink);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        borderRadius: "12px",
        border: "#CCCCCC 0.5px solid",
        width: "350px",
        height: "60px",
        bgcolor: "white",
      }}
    >
      <Stack direction="column">
        <Typography
          sx={{
            marginRight: 2,
            fontFamily: "DM sans",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {sentFileName}
        </Typography>
        <Typography
          sx={{
            color: "#CCCCCC",
            fontFamily: "DM sans",
            fontWeight: 400,
            fontSize: "11px",
          }}
        >
          {sender}
        </Typography>
      </Stack>
      <Typography
        sx={{ fontWeight: 400, fontSize: "12px", color: "#121212", mb: "19px" }}
      >
        {file.size}
      </Typography>
      <Button
        sx={{
          textTransform: "none",
          color: "#7784EE",
          fontWeight: 500,
          fontSize: "12px",
          mb: "20px",
        }}
        variant="standard"
        onClick={
          messageType === "study_leave" ||
          messageType === "evaluations" ||
          messageType === "early_closures"
            ? handleTemplateOpen
            : handleDownload
        }
      >
        {messageType === "study_leave" ||
        messageType === "evaluations" ||
        messageType === "early_closures"
          ? "Open"
          : "Download"}
      </Button>
    </Box>
  );
};

DownloadDocumentArea.propTypes = {
  file: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  handleTemplateOpen: PropTypes.func.isRequired,
  messageType: PropTypes.string.isRequired,
};

export default DownloadDocumentArea;
