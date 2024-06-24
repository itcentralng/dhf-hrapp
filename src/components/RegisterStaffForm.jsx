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
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import {
  HeadingText,
  InputLabel,
  SubHeadingText,
} from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import usersList from "../data/usersList";
import { useUserList } from "./UserListContext";
import CloseIcon from "@mui/icons-material/Close";
import { useEditUserMutation, useRegisterStaffMutation } from "../state/api";
import { editUserRequest } from "../state/editUser";
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

const RegisterStaffForm = ({
  formType,
  setShowRegConfirmation,
  setShowEditConfirmation,
  handleModalClose,
}) => {
  const {
    // updateUsersList,
    formData,
    setFormData,
    removeUserForEdit,
    handleEditClose,
  } = useUserList();
  const [expanded, setExpanded] = useState(false);
  const [passport, setPassport] = useState();
  const [resume, setResume] = useState();
  const [signature, setSignature] = useState();
  const [loading, setLoading] = useState(false);

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
      default:
        break;
    }
  };

  const [registerStaffMutation] = useRegisterStaffMutation();
  const [editUserMutation] = useEditUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newStaff = {
      ...formData,
      staffId: generateRandomID(),
      passport: passport,
      resume: resume,
      signature: signature,
    };
    const fullName = newStaff.name ? newStaff.name.split(" ") : ["", ""];
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ");

    const formDataItem = {
      first_name: firstName,
      last_name: lastName,
      email: newStaff.email,
      phone: newStaff.phoneNumber,
      role: newStaff.role,
      password: newStaff.password,
      resumption_time: newStaff.clockIn,
      closing_time: newStaff.clockOut,
    };
    setLoading(true);
    try {
      await registerStaffMutation(formDataItem).unwrap();
      handleModalClose();
      setShowRegConfirmation(true);
      console.log("user has been created successfully");
    } catch (error) {
      console.error("There was an error creating the user!", error);
      alert("Failed to register user! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (event) => {
    event.preventDefault();

    const newStaff = {
      ...formData,
      staffId: generateRandomID(),
      passport: passport,
      resume: resume,
      signature: signature,
    };
    const fullName = newStaff.name ? newStaff.name.split(" ") : ["", ""];
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ");

    const formDataItem = {
      first_name: firstName,
      last_name: lastName,
      email: newStaff.email,
      phone: newStaff.phoneNumber,
      role: newStaff.role,
      user_id: formData.user_id,
    };
    setLoading(true);
    try {
      const response = await editUserMutation(formDataItem);
      if (!response.data) {
        alert("User was not edited");
      }
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error editing the user!", error);
      alert("Failed to edit user! Please try again.");
    } finally {
      setLoading(false);
    }
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
      }}
    >
      <HeadingText>
        {formType === "register staff"
          ? "Register New Staff"
          : "Edit Existing Staff"}
      </HeadingText>

      <br />
      <SubHeadingText sx={{ mt: "-25px" }}>
        {formType === "register staff"
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
          height: "400px",
          overflowX: "hidden",
          overflowY: "scroll",
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
          {/* <Grid item xs={6}>
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
          </Grid> */}
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
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="hos">Head Of Section</MenuItem>
              <MenuItem value="hr">Human Resource</MenuItem>
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
          <Grid
            item
            xs={6}
            sx={{
              padding: "10px",
              display: formType === "register staff" ? "block" : "none",
            }}
          >
            <InputLabel>Password </InputLabel>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel variant="subtitle1">Work Hours</InputLabel>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  placeholder="format: 07:00"
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
                  placeholder="format: 07:00"
                  fullWidth
                  required
                  name="clockOut"
                  value={formData.clockOut}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={6}>
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
          </Grid> */}
        </Grid>
        {/* <Grid container alignItems="center" spacing={1} sx={{ marginTop: 2 }}>
          <Grid item>
            <IconButton onClick={handleToggleExpand}>
              <ExpandMoreIcon sx={{ color: "primary.main" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Additional Information{" "}
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "rgba(85, 85, 85, 0.5)",
                }}
              >
                (optional)
              </span>
            </Typography>
          </Grid>
        </Grid>
        {expanded && (
          <Grid container spacing={1} sx={{ marginTop: 2 }}>
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
            <Grid item xs={6} sx={{ padding: "10px" }}>
              <InputLabel>
                Passport{" "}
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
              <InputLabel>
                Resume{" "}
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
              <InputLabel>
                Signature{" "}
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
                    Choose File
                  </UploadButton>
                </label>
                <Typography variant="subtitle1">
                  {signature ? signature.name : "No file chosen"}
                </Typography>
              </FileUploadContainer>
            </Grid>
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
        )} */}
        {formType === "register staff" ? (
          <FilledButton
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            sx={{ width: "163px", height: "45px", mx: "auto", mt: "5px" }}
          >
            {loading ? <CircularProgress size={22} /> : "Register Staff"}
          </FilledButton>
        ) : (
          <FilledButton
            type="submit"
            onClick={handleEdit}
            sx={{ width: "163px", height: "45px", mx: "auto", mt: "5px" }}
          >
            {loading ? <CircularProgress size={22} /> : "Edit Staff"}
          </FilledButton>
        )}
      </FormControl>
    </Box>
  );
};

export default RegisterStaffForm;
