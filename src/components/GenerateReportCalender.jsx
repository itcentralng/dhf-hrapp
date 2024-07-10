import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import Calendar from "./Calendar";
import { FilledButton } from "../styled-components/styledButtons";
import Close from "@mui/icons-material/Close";
import {
  useGenerateEarlyClosureReportMutation,
  useGenerateEvaluationReportMutation,
  useGenerateStudyLeaveReportMutation,
} from "../state/GenerateReport";

// eslint-disable-next-line react/prop-types
const GenerateReportCalender = ({ handleModalClose, title }) => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [loading, setLoading] = React.useState(false);

  const [evaluationReport] = useGenerateEvaluationReportMutation();
  const [studyReport] = useGenerateStudyLeaveReportMutation();
  const [closureReport] = useGenerateEarlyClosureReportMutation();

  const handleDateRangeChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  const handleGenerateReport = async () => {
    if (dateRange.startDate && dateRange.endDate) {
      const formattedDateRange = `${dateRange.startDate}:${dateRange.endDate}`;
      try {
        setLoading(true);
        let response;
        if (title === "Evaluations") {
          response = await evaluationReport({
            date_range: formattedDateRange,
          }).unwrap();
        } else if (title === "Study Leaves") {
          response = await studyReport({
            date_range: formattedDateRange,
          }).unwrap();
        } else if (title === "Early Closures") {
          response = await closureReport({
            date_range: formattedDateRange,
          }).unwrap();
        } else {
          alert("Invalid report type");
        }

        if (response) {
          const reportKey = `${title}_report_${formattedDateRange}`;
          sessionStorage.setItem(reportKey, JSON.stringify(response));
          alert("Report generated successfully");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please select both start and end dates");
    }
  };

  return (
    <Stack
      gap={"20px"}
      sx={{
        alignItems: "center",
        width: "500px",
        // height: "570px",
        padding: "20px",
        mx: "auto",
        mt: "1%",
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <HeadingText>{`${title} Report`}</HeadingText>
          <SubHeadingText sx={{ display: "block" }}>
            Please select the timeframe you want to generate your report from.
          </SubHeadingText>
        </div>
        <IconButton onClick={handleModalClose} disableRipple>
          <Close />
        </IconButton>
      </Box>
      <Calendar onDateRangeChange={handleDateRangeChange} />
      <FilledButton
        sx={{
          borderRadius: "12px",
          fontFamily: "DM sans",
        }}
        onClick={handleGenerateReport}
        disabled={loading}
      >
        Generate Report
      </FilledButton>
    </Stack>
  );
};

export default GenerateReportCalender;
