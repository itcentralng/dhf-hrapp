/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { HeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import dayjs from "dayjs";

const EvaluationInfoCard = ({
  handleCloseModal,
  reportData,
  title,
  dateRange,
}) => {
  const formatDate = (date) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "";
  };

  return (
    <Box
      sx={{
        bgcolor: "#F9F9F9",
        borderRadius: "12px",
        maxHeight: "80vh",
        width: "600px",
        overflow: "hidden",
        overflowY: "auto",
        padding: "2.5em",
      }}
    >
      <HeadingText sx={{ fontWeight: 400 }}>
        {`${title} Report from ${dateRange}`}
      </HeadingText>
      <ul style={{ marginTop: "25px", padding: "15px" }}>
        <Stack gap="30px">
          {reportData.data.map((report, index) => (
            <li key={index}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  fontFamily: "DM sans",
                  lineHeight: "23px",
                }}
              >
                Evaluation was done for {report.peer} on{" "}
                {formatDate(report.date)}
              </Typography>
            </li>
          ))}
        </Stack>
      </ul>
      <Stack sx={{ mt: 3 }}>
        <FilledButton onClick={handleCloseModal}>Close</FilledButton>
      </Stack>
    </Box>
  );
};

export default EvaluationInfoCard;
