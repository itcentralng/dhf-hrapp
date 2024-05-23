import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import templatesData from "../../data/templatesData";
import templateImage from "../../assets/templateImage.svg";
import templateIcon from "../../assets/templateIcon.svg";
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
          mb: "13px",
        }}
      >
        Draft New Document
      </Typography>
      <Stack direction="row" gap={1} sx={{}}>
        <Box
          sx={{
            width: "187px",
            mt: "-5px",
            height: "255px",
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
        {templatesData.map((template) => (
          <Box
            key={template.name}
            onClick={() => navigate(`${template.link}`)}
            sx={{
              width: "200px",
              height: "265px",
              borderRadius: "4px",
              backgroundImage: `url("${templateImage}")`,
              backgroundSize: "cover",
              mt: "-10px",
              mb: "50px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Stack
              direction="row"
              gap={"4px"}
              sx={{
                bgcolor: "white",
                marginTop: "100%",
                mx: "auto",
                borderRadius: "4px",
                position: "absolute",
                width: "162px",
                height: "40px",
                bottom: "3%",
                left: "5%",
                pl: "13px",
                pt: "20px",
              }}
            >
              <img
                src={templateIcon}
                style={{ width: "20px", height: "20px" }}
              />
              <Stack direction="column">
                <Typography
                  sx={{
                    fontFamily: "urbanist",
                    fontWeight: 400,
                    fontSize: "12.8px",
                  }}
                >
                  {template.name}
                </Typography>
                {/* <Typography
                  sx={{
                    color: "#5A626C",
                    fontFamily: "urbanist",
                    fontWeight: 300,
                    fontSize: "8.5px",
                  }}
                >{`Last edited ${template.lastEditedDate}`}</Typography> */}
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default CreateDocument;
