import {
  Box,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import { useState } from "react";
import {
  HeadingText,
  SubHeadingText,
} from "../../styled-components/StyledText";
import GenerateReportCalendar from "../../components/GenerateReportCalender";
import ReportListItem from "../../components/ReportListItem";

const Reports = () => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
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
    handleModalOpen();
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
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <GenerateReportCalendar
          title={calendarTitle}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default Reports;
