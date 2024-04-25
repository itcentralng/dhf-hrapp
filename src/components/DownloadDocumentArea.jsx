import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PDFIcon from "../assets/xlsIcon.svg";
import DOCXIcon from "../assets/xlsIcon.svg";
import XLSIcon from "../assets/xlsIcon.svg";
import { Box, Stack } from "@mui/material";

const DownloadDocumentArea = ({ file /*sender*/ }) => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = file.url; // Assuming file.url contains the download link
    downloadLink.setAttribute("download", file.name);

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
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
          {/*file.name*/}Leave-Form.xls
        </Typography>
        <Typography
          sx={{
            color: "#CCCCCC",
            fontFamily: "DM sans",
            fontWeight: 400,
            fontSize: "11px",
          }}
        >
          Mustapha Yakubu{/*sender*/}
        </Typography>
      </Stack>
      <Typography
        sx={{ fontWeight: 400, fontSize: "12px", color: "#121212", mb: "19px" }}
      >
        12.4MB{/*file.size*/}
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

export default DownloadDocumentArea;
