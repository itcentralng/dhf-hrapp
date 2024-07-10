import { Menu, MenuItem, Modal, Stack } from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import { useEffect, useState } from "react";
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
  const [calendarTitle, setCalendarTitle] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const options = ["Early Closures", "Study Leaves", "Evaluations"];
  const [reports, setReports] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    handleClose();
    switch (option) {
      case "Early Closures":
        setCalendarTitle("Early Closures");
        break;
      case "Study Leaves":
        setCalendarTitle("Study Leaves");
        break;
      case "Evaluations":
        setCalendarTitle("Evaluations");
        break;
    }
    handleModalOpen();
  };

  useEffect(() => {
    const storedReports = Object.keys(sessionStorage)
      .filter((key) => key.includes(`_report_`))
      .map((key) => ({
        key,
        data: JSON.parse(sessionStorage.getItem(key)),
        dateRange: key.split("_").pop().replace(":", " to "),
        reportName: key.split("_").shift(),
      }));
    setReports(storedReports);
  }, [open]);

  return (
    <>
      <Stack
        direction="row"
        sx={{ padding: "30px", justifyContent: "space-between" }}
      >
        <Stack direction="column">
          <HeadingText sx={{ fontFamily: "urbanist" }}>Reports</HeadingText>
          <SubHeadingText>
            {reports.length <= 0
              ? "Please generate a new report"
              : "Select a report from the list below to view."}
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
      <ReportListItem reports={reports} />
      <Modal open={open} onClose={handleModalClose}>
        <GenerateReportCalendar
          title={calendarTitle}
          reports={reports}
          handleModalClose={handleModalClose}
        />
      </Modal>
    </>
  );
};

export default Reports;
