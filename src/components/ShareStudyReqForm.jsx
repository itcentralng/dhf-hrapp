import { Box, FormControl, TextField, Typography, styled } from "@mui/material";
import React from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
const Text = styled("Typography")({
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
  margin: "10px 0px 10px 0px",
});

const ShareStudyReqForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          width: "512px",
          height: "430px",
          padding: "53px 43px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeadingText>Share 'Study Request Application Form'</HeadingText>
        <SubHeadingText>
          Please fill out the form below to share report to the selected person.
        </SubHeadingText>
        <FormControl
          component="form"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CDD0D5",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
            borderRadius: "8px",
            mt: "10px",
          }}
        >
          <Text>Share</Text>
          <TextField id="outlined-basic" variant="outlined" />
          <Text>Additional info</Text>
          <TextField
            id="outlined-multiline-flexible"
            fullWidth
            multiline
            minRows={6}
            placeholder="Type something..."
          />
          <FilledButton
            sx={{ width: "36%", mx: "auto", mt: "40px", fontFamily: "DM sans" }}
          >
            Send Messsage
          </FilledButton>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ShareStudyReqForm;
