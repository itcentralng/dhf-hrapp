import { IconButton, Stack } from "@mui/material";
import React from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import Calendar from "./Calendar";
import { FilledButton } from "../styled-components/styledButtons";
import CloseIcon from "@mui/icons-material/Close";
const GenerateReportCalender = ({ setShowCalendar, title }) => {
  return (
    <Stack
      gap={"20px"}
      sx={{
        alignItems: "center",
        width: "500px",
        height: "570px",
        padding: "20px",
        mx: "auto",
        bgcolor: "white",
        mt: "100px",
        ml: "20%",
      }}
    >
      <div>
        <IconButton
          onClick={() => setShowCalendar(false)}
          sx={{ float: "right", mt: "-10px" }}
        >
          <CloseIcon />
        </IconButton>

        <HeadingText>{`${title} Report`}</HeadingText>

        <SubHeadingText sx={{ display: "block" }}>
          Please select the timeframe you want to generate your report from.
        </SubHeadingText>
      </div>
      <Calendar />
      <FilledButton sx={{ borderRadius: "12px", fontFamily: "DM sans" }}>
        Generate Report
      </FilledButton>
    </Stack>
  );
};

export default GenerateReportCalender;
