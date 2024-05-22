import { Box, Menu, MenuItem, Stack, Typography, styled } from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import { useState } from "react";
import {
  HeadingText,
  SubHeadingText,
} from "../../styled-components/StyledText";
import GenerateReportCalendar from "../../components/GenerateReportCalender";
import ReportListItem from "../../components/ReportListItem";
const Overlay = styled(Box)({
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
  const [calendarTitle, setCalendarTitle] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const options = [
    "Early closure",
    "Late Arrivals",
    "Leave of Absence",
    "Movement",
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    handleClose();
    switch (option) {
      case "Early closure":
        setCalendarTitle("Early closure");
        break;
      case "Late Arrivals":
        setCalendarTitle("Late Arrivals");
        break;
      case "Leave of Absence":
        setCalendarTitle("Leave of Absence");
        break;
      case "Movement":
        setCalendarTitle("Movement");
        break;
    }
    setShowCalendar(true);
  };
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
        <FilledButton
          onClick={handleClick}
          sx={{ height: "40px", width: "auto", px: "10px" }}
        >
          Generate Report
        </FilledButton>
      </Stack>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <ReportListItem />
      {showCalendar && (
        <Overlay>
          <GenerateReportCalendar
            setShowCalendar={setShowCalendar}
            title={calendarTitle}
          />
        </Overlay>
      )}
    </>
  );
};

export default Reports;
