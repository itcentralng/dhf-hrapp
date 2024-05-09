import { Box, Stack, Typography, styled } from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import { useState } from "react";
import {
  HeadingText,
  SubHeadingText,
} from "../../styled-components/StyledText";
import GenerateReportCalendar from "../../components/GenerateReportCalender";
import ReportListItem from "../../components/ReportListItem";
const Overlay = styled("Box")({
  zIndex: 10,
  position: "fixed",
  top: 0,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Reports = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowCalendar(true);
  }
  return (
    <>
      <Stack
        direction="row"
        sx={{ padding: "30px", justifyContent: "space-between" }}
      >
        <Stack direction="column">
          <HeadingText sx={{ fontFamily: "urbanist" }}>Reports</HeadingText>
          <SubHeadingText>
            Select a report from the list below to view or download.
          </SubHeadingText>
        </Stack>
        <FilledButton onClick={handleClick}>Generate Report</FilledButton>
      </Stack>
      <ReportListItem />
      {showCalendar && (
        <Overlay>
          <GenerateReportCalendar setShowCalendar={setShowCalendar} />
        </Overlay>
      )}
    </>
  );
};

export default Reports;
