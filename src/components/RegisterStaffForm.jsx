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
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import usersList from "../data/usersList";
import { useUserList } from "./UserListContext";
import CloseIcon from "@mui/icons-material/Close";
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

const RegisterStaffForm = ({
  formType,
  setRegisterStaff,
  setShowRegConfirmation,
  setShowEditConfirmation,
}) => {
  const {
    updateUsersList,
    formData,
    setFormData,
    passport,
    signature,
    resume,
    setPassport,
    setSignature,
    setResume,
    removeUserForEdit,
    setEditStaffForm,
  } = useUserList();
  const [expanded, setExpanded] = useState(false);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   department: "",
  //   title: "",
  //   phoneNumber: "",
  //   role: "",
  //   email: "",
  //   clockIn: "",
  //   clockOut: "",
  //   gender: "",
  //   passport: null,
  //   resume: null,
  //   signature: null,
  //   homeAddress: "",
  //   additionalNotes: "",
  //   staffId: generateRandomID(),
  // });

  function generateRandomID() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for (let i = 0; i < 2; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return id;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileTypeChange = (fileType, file) => {
    switch (fileType) {
      case "passport":
        setPassport(file);
        break;
      case "resume":
        setResume(file);
        break;
      case "signature":
        setSignature(file);
        break;
    }
  };

  // const handleFileChange = (event) => {
  //   const { name, value } = event.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStaff = {
      ...formData,
      staffId: generateRandomID(),
    };
    console.log(newStaff);
    updateUsersList((prevList) => [...prevList, newStaff]);
    setFormData({});
    setShowRegConfirmation(true);
    setRegisterStaff(false);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const editedUser = { ...formData };
    removeUserForEdit(editedUser.staffId);
    updateUsersList((prevList) => [...prevList, editedUser]);
    setFormData({});
    setShowEditConfirmation(true);
    setEditStaffForm(false);
  };

  const closeForm = () => {
    setRegisterStaff(false);
    setEditStaffForm(false);
  };

  const handleToggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box
      sx={{
        borderRadius: "4px",
        width: "600px",
        minHeight: "300px",
        padding: "15px 30px",
        fontFamily: "DM sans",
        bgcolor: "white",
        // mx: "auto",
        ml: "-300px",
        mt: expanded ? "-300px" : "100px",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <HeadingText>
          {formType == "register staff"
            ? "Register New Staff"
            : "Edit Existing Staff"}
        </HeadingText>
        <IconButton onClick={closeForm}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <br />
      <SubHeadingText sx={{ mt: "-25px" }}>
        {formType == "register staff"
          ? "Please fill out the form below to register a new staff in your school"
          : "Modify existing staff data"}
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
        <Grid container spacing={1} sx={{ mt: "0px" }}>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Name</InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Department</InputLabel>
            <TextField
              select
              fullWidth
              required
              variant="outlined"
              placeholder="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </Grid>

          {/* Second Row */}
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Title</InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Phone Number</InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Third Row */}
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Role</InputLabel>
            <TextField
              select
              fullWidth
              required
              variant="outlined"
              placeholder="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="Staff">Staff</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Head Of Section">Head Of Section</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Email</InputLabel>
            <TextField
              fullWidth
              required
              variant="outlined"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
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
                  required
                  name="clockIn"
                  value={formData.clockIn}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="Clock Out"
                  fullWidth
                  required
                  name="clockOut"
                  value={formData.clockOut}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Gender</InputLabel>
            <TextField
              select
              fullWidth
              required
              variant="outlined"
              Upload
              placeHolder="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              sx={{
                borderColor: "purple",
                "& .MuiSelect-icon": {
                  color: "primary.main", // Change to your primary color
                },
              }}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
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
          <Grid container spacing={1} sx={{ marginTop: 2 }}>
            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>Passport</InputLabel>
              <FileUploadContainer>
                <input
                  type="file"
                  name="passport"
                  value={formData.passport}
                  id="passport-upload"
                  onChange={(e) =>
                    handleFileTypeChange("passport", e.target.files[0])
                  }
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
                  name="resume"
                  value={formData.resume}
                  id="resume-upload"
                  onChange={(e) =>
                    handleFileTypeChange("resume", e.target.files[0])
                  }
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
                  name="signature"
                  value={formData.signature}
                  id="signature-upload"
                  onChange={(e) =>
                    handleFileTypeChange("signature", e.target.files[0])
                  }
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
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
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
                minRows={4}
                maxRows={6}
                placeholder="Start Typing Here..."
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
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
        {formType == "register staff" ? (
          <FilledButton
            type="submit"
            onClick={handleSubmit}
            sx={{ width: "163px", height: "45px", mx: "auto", mt: "5px" }}
          >
            Register Staff
          </FilledButton>
        ) : (
          <FilledButton
            type="submit"
            onClick={handleEdit}
            sx={{ width: "163px", height: "45px", mx: "auto", mt: "5px" }}
          >
            Edit Staff
          </FilledButton>
        )}
      </FormControl>
    </Box>
  );
};

export default RegisterStaffForm;
