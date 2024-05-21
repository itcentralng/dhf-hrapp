import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, Typography, Button } from "@mui/material";
import PDFIcon from "../assets/xlsIcon.svg"; // Corrected icon paths
import DOCXIcon from "../assets/xlsIcon.svg";
import XLSIcon from "../assets/xlsIcon.svg";

const DownloadDocumentArea = ({ file, sender }) => {
  if (!file) {
    return <Typography>No document available for download.</Typography>;
  }

  const handleDownload = () => {
    // const downloadLink = document.createElement("a");
    // downloadLink.href = file;
    // downloadLink.setAttribute("download", file.name);
    // document.body.appendChild(downloadLink);
    // downloadLink.click();
    // document.body.removeChild(downloadLink);
    console.log(file);
  };

  const renderFileIcon = () => {
    switch (file.type) {
      case "pdf":
        return <img src={PDFIcon} alt="PDF Icon" />;
      case "docx":
        return <img src={DOCXIcon} alt="DOCX Icon" />;
      case "xls":
        return <img src={XLSIcon} alt="XLS Icon" />;
      default:
        return <img src={PDFIcon} alt="PDF Icon" />;
    }
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
      <div>{renderFileIcon()}</div>
      <Stack direction="column">
        <Typography
          sx={{
            marginRight: 2,
            fontFamily: "DM sans",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {file.name}
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
        onClick={handleDownload}
      >
        Download
      </Button>
    </Box>
  );
};

DownloadDocumentArea.propTypes = {
  file: PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
  }),
  sender: PropTypes.string.isRequired,
};

export default DownloadDocumentArea;
