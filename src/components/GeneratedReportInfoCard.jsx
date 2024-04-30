import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";

const GeneratedReportInfoCard = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F9F9F9",
        borderRadius: "12px",
        padding: "25px",
        height: "500px",
        width: "450px",
        overflow: "hidden",
        overflowY: "auto",
      }}
    >
      {/* <HeadingText>
        Leave of Absence Report generated on the 12/08/35
      </HeadingText> */}
      <HeadingText sx={{ fontWeight: 400 }}>
        Leave of Absence Report generated on the 12/08/35
      </HeadingText>
      <ul style={{ marginTop: "25px", padding: "15px" }}>
        <Stack gap="30px">
          <li>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                fontFamily: "DM sans",
                lineHeight: "23px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Vestibulum sit lectus vel
              diam sed eu suspendisse. Nam suscipit facilisi proin non
              scelerisque. Cursus odio ac lacinia cursus. Velit pharetra dolor
              vitae in. Adipiscing pellentesque ac semper pharetra
            </Typography>
          </li>
        </Stack>
      </ul>
      <Stack
        direction="row"
        gap="16px"
        sx={{ width: "400px", mx: "auto", mt: "30px" }}
      >
        <FilledButton sx={{ width: "200px" }}>Share</FilledButton>
        <FilledButton className="outlined" sx={{ width: "200px" }}>
          Delete
        </FilledButton>
      </Stack>
    </Box>
  );
};

export default GeneratedReportInfoCard;
