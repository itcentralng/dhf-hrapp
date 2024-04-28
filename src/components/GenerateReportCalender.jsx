import { Stack } from "@mui/material";
import React from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import Calendar from "./Calendar";
import { FilledButton } from "../styled-components/styledButtons";

const GenerateReportCalender = () => {
  return (
    <Stack
      gap={"20px"}
      sx={{
        alignItems: "center",
        width: "500px",
        height: "550px",
        padding: "20px",
        mx: "auto",
      }}
    >
      <div>
        <HeadingText>Early Closure Report</HeadingText>
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
