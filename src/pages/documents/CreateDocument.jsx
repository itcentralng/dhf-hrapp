import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const CreateDocument = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("blankdocument", { state: { from: "createdocument" } });
  };
  return (
    <Container>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          fontFamily: "urbanist",
        }}
      >
        Draft New Document
      </Typography>
      <Box
        sx={{
          width: "177px",
          height: "251px",
          borderRadius: "4px",
          border: "#D7D9DC 0.5px solid",
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "34px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleNavigation}
      >
        <AddIcon
          sx={{ color: "primary.main", width: "45px", height: "45px" }}
        />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            fontFamily: "inter",
          }}
        >
          Blank Document
        </Typography>
      </Box>
    </Container>
  );
};

export default CreateDocument;
