import { Stack } from "@mui/material";
import React, { useState } from "react";
import { FilledButton } from "../../styled-components/styledButtons";
import fileIcon from "../../assets/fileIcon.svg";
import {
  HeadingText,
  SubHeadingText,
} from "../../styled-components/StyledText";
const DocDetailsAndButton = () => {
  const [documentTitle, setDocumentTitle] = useState("Untitled Document");

  const changeHandler = (event) => {
    setDocumentTitle(event.target.value);
  };
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
      }}
    >
      <Stack direction="row">
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
          <SubHeadingText>created 08/05/23</SubHeadingText>
        </Stack>
      </Stack>
      <FilledButton sx={{ width: "136px", height: "39px" }}>Share</FilledButton>
    </Stack>
  );
};

export default DocDetailsAndButton;
