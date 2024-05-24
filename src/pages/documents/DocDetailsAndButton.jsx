import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { FilledButton } from "../../styled-components/styledButtons";
import fileIcon from "../../assets/fileIcon.svg";
import {
  HeadingText,
  SubHeadingText,
} from "../../styled-components/StyledText";
import { useShareForm } from "../../components/context/ShareFormContext";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const DocDetailsAndButton = ({ documentTitle, setDocumentTitle }) => {
  const { setDisplayShareForm } = useShareForm();
  const currentDate = new Date().toDateString();
  const changeHandler = (event) => {
    setDocumentTitle(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        height: "85px",
        padding: "25px",
        borderTop: " rgba(204, 204, 204, 0.5) 1px solid",
        borderBottom: "rgba(204, 204, 204, 0.5) 1px solid",
        bgcolor: "white",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBack />
        </IconButton>
        <img
          src={fileIcon}
          alt="file icon"
          style={{ width: "43px", height: "48px" }}
        />
        <Stack direction="column">
          <input
            type="text"
            onChange={changeHandler}
            value={documentTitle}
            disabled={
              documentTitle == "Study Leave" ||
              documentTitle == "Evaluation Form" ||
              documentTitle == "Early Closure"
                ? true
                : false
            }
            style={{
              border: "none",
              backgroundColor: "white",
              fontWeight: 500,
              fontSize: "20px",
              fontFamily: "DM Sans",
              color: "black",
              outline: "none",
              width: "500px",
            }}
          />
          <SubHeadingText>{`created on ${currentDate}`}</SubHeadingText>
        </Stack>
      </Stack>
      <FilledButton
        sx={{ width: "136px", height: "39px" }}
        onClick={() => setDisplayShareForm(true)}
      >
        Share
      </FilledButton>
    </Stack>
  );
};

export default DocDetailsAndButton;
