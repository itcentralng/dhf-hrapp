/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { HeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";

const StudyLeaveInfoCard = ({
  handleCloseModal,
  reportData,
  title,
  dateRange,
}) => {
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
                {report.applicant_name}, a {report.designation} of the school
                sent a study leave notification on {report.applicant_date}{" "}
                requesting for a leave to pursue his/her {report.area_of_study}{" "}
                in {report.course_of_study} at {report.institute_of_study} for a
                period of {report.duration_of_study} running from{" "}
                {report.start_date} to {report.end_date} for the following
                purpose: {report.purpose_of_study}
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

export default StudyLeaveInfoCard;
