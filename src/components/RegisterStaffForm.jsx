import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
  IconButton,
  Button,
  TextareaAutosize,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FileUploadContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  border: "#CDD0D5 1px solid",
  alignItems: "center",
  borderRadius: "12px",
  padding: "9px",
});

const UploadButton = styled(Button)({
  bgcolor: "rgba(85, 85, 85, 0.5)",
  borderRadius: "6px",
  width: "125px",
  color: "#D9D9D9",
  textTransform: "none",
  marginRight: "10px",
});

const InputLabel = styled(Typography)({
  fontFamily: "DM sans",
  fontWeigth: 400,
  fontSize: "14px",
  color: "black",
});

const RegisterStaffForm = () => {
  const [expanded, setExpanded] = useState(false);
  const [passport, setPassport] = useState(null);
  const [resume, setResume] = useState(null);
  const [signature, setSignature] = useState(null);
  const handlePassportChange = (event) => {
    const selectedFile = event.target.files[0];
    setPassport(selectedFile);
  };

  const handleResumeChange = (event) => {
    const selectedFile = event.target.files[0];
    setResume(selectedFile);
  };

  const handleSignatureChange = (event) => {
    const selectedFile = event.target.files[0];
    setSignature(selectedFile);
  };

  const handleToggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <Box
      sx={{
        borderRadius: "4px",
        width: "700px",
        minHeight: "500px",
        padding: "50px 40px",
        fontFamily: "DM sans",
        bgcolor: "white",
        mx: "auto",
      }}
    >
      <HeadingText sx={{ marginBottom: "100px" }}>
        Register New Staff
      </HeadingText>
      <br />
      <SubHeadingText>
        Please fill out the form below to register a new staff in your school
      </SubHeadingText>
      <FormControl
        component="form"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CDD0D5",
          },
          "& .MuiSelect-icon": {
            color: "primary.main",
          },
        }}
      >
        <Grid container spacing={2} sx={{ mt: "5px" }}>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Name</InputLabel>
            <TextField fullWidth variant="outlined" placeholder="Name" />
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Department</InputLabel>
            <TextField
              select
              fullWidth
              variant="outlined"
              placeholder="Department"
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </Grid>

          {/* Second Row */}
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Title</InputLabel>
            <TextField fullWidth variant="outlined" placeholder="Title" />
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Phone Number</InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Phone Number"
            />
          </Grid>

          {/* Third Row */}
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Role</InputLabel>
            <TextField select fullWidth variant="outlined" placeholder="Role">
              <MenuItem value="option1">Teacher</MenuItem>
              <MenuItem value="option2">Admin</MenuItem>
              <MenuItem value="option3">Head Of Section</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Email</InputLabel>
            <TextField fullWidth variant="outlined" placeholder="Email" />
          </Grid>

          {/* Fourth Row */}
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Work Hours</InputLabel>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="Clock In"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="Clock Out"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Gender</InputLabel>
            <TextField
              select
              fullWidth
              variant="outlined"
              Upload
              placeHolder="Gender"
              sx={{
                borderColor: "purple",
                "& .MuiSelect-icon": {
                  color: "primary.main", // Change to your primary color
                },
              }}
            >
              <MenuItem value="option1">Male</MenuItem>
              <MenuItem value="option2">Female</MenuItem>
            </TextField>
          </Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1} sx={{ marginTop: 2 }}>
          <Grid item>
            <IconButton onClick={handleToggleExpand}>
              <ExpandMoreIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">Additional Information</Typography>
          </Grid>
        </Grid>
        {expanded && (
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>Passport</InputLabel>
              <FileUploadContainer>
                <input
                  type="file"
                  id="passport-upload"
                  onChange={handlePassportChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="passport-upload">
                  <UploadButton variant="contained" component="span">
                    Choose File
                  </UploadButton>
                </label>
                <Typography variant="subtitle1">
                  {passport ? passport.name : "No file chosen"}
                </Typography>
              </FileUploadContainer>
            </Grid>
            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>Resume</InputLabel>
              <FileUploadContainer>
                <input
                  type="file"
                  id="resume-upload"
                  onChange={handleResumeChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="resume-upload">
                  <UploadButton variant="contained" component="span">
                    Choose File
                  </UploadButton>
                </label>
                <Typography variant="subtitle1">
                  {resume ? resume.name : "No file chosen"}
                </Typography>
              </FileUploadContainer>
            </Grid>

            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>Signature</InputLabel>
              <FileUploadContainer>
                <input
                  type="file"
                  id="signature-upload"
                  onChange={handleSignatureChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="signature-upload">
                  <UploadButton variant="contained" component="span">
                    choose File
                  </UploadButton>
                </label>
                <Typography variant="subtitle1">
                  {signature ? signature.name : "No file chosen"}
                </Typography>
              </FileUploadContainer>
            </Grid>
            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>
                Home Address{" "}
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "rgba(85, 85, 85, 0.5)",
                  }}
                >
                  (optional)
                </span>
              </InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Home Address"
              />
            </Grid>

            {/* Third row */}
            <Grid item xs={12} sx={{ padding: "10px" }}>
              <InputLabel>
                Additional Notes{" "}
                <span
                  style={{
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "rgba(85, 85, 85, 0.5)",
                  }}
                >
                  (optional)
                </span>
              </InputLabel>

              <TextareaAutosize
                minRows={9}
                maxRows={10}
                placeholder="Start Typing Here..."
                style={{
                  width: "100%",
                  resize: "vertical",
                  borderRadius: "4px",
                  border: "rgba(205, 208, 213, 1) 1px solid",
                  padding: "16px 18px",
                }}
              />
            </Grid>
          </Grid>
        )}
        <FilledButton
          type="submit"
          sx={{ width: "183px", height: "56px", mx: "auto", mt: "15px" }}
        >
          Register Staff
        </FilledButton>
      </FormControl>
    </Box>
  );
};

export default RegisterStaffForm;
