/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Modal, Stack, Typography, styled } from "@mui/material";
import { FilledButton } from "../styled-components/styledButtons";
import EvaluationInfoCard from "./EvaluationInfoCard";
import StudyLeaveInfoCard from "./StudyLeaveInfoCard";
import EarlyClosureInfoCard from "./EarlyClosureInfoCard";

const Text = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  color: "#252C32",
  fontFamily: "inter",
});

const ReportListItem = ({ reports }) => {
  const [open, setOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleOpen = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReport(null);
  };

  const renderInfoCard = () => {
    if (!selectedReport) return null;

    switch (selectedReport.reportName.toLowerCase()) {
      case "evaluations":
        return (
          <EvaluationInfoCard
            handleCloseModal={handleClose}
            reportData={selectedReport}
            title={selectedReport.reportName}
            dateRange={selectedReport.dateRange}
          />
        );
      case "study leaves":
        return (
          <StudyLeaveInfoCard
            handleCloseModal={handleClose}
            reportData={selectedReport}
            title={selectedReport.reportName}
            dateRange={selectedReport.dateRange}
          />
        );
      case "early closures":
        return (
          <EarlyClosureInfoCard
            handleCloseModal={handleClose}
            reportData={selectedReport}
            title={selectedReport.reportName}
            dateRange={selectedReport.dateRange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {reports.map((report, index) => (
        <Stack
          direction="row"
          sx={{
            height: "62px",
            px: "16px",
            borderBottom: "#3C40434D 1px solid",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          key={index}
        >
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <Text>{`${report.reportName} Report from ${report.dateRange}`}</Text>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <FilledButton onClick={() => handleOpen(report)}>Open</FilledButton>
          </Stack>
        </Stack>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>{renderInfoCard()}</Box>
      </Modal>
    </>
  );
};

export default ReportListItem;
