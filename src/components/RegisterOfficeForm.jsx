import {
  Box,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  HeadingText,
  InputLabel,
  SubHeadingText,
} from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import CloseIcon from "@mui/icons-material/Close";
import MultipleSelect from "./MultipleSelect";
const RegisterOfficeForm = ({ setShowOfficeConf, setRegisterOffice }) => {
  const [officeFormData, setOfficeFormData] = useState({
    name: "",
    department: "",
    headOfOffice: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOfficeFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOffice = {
      ...officeFormData,
    };
    console.log(newOffice);
    setRegisterOffice(false);
    setShowOfficeConf(true);
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
        mt: "100px",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <HeadingText>Register Office</HeadingText>
        <IconButton>
          <CloseIcon onClick={() => setRegisterOffice(false)} />
        </IconButton>
      </Stack>
      <br />
      <SubHeadingText sx={{ mt: "-25px" }}>
        Please fill out the form below to register a new office in your school
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

          width: "100%",
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
              value={officeFormData.name}
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
              value={officeFormData.department}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <InputLabel variant="subtitle1">Assign head of office</InputLabel>
            <MultipleSelect />
          </Grid>
        </Grid>
        <FilledButton
          type="submit"
          onClick={handleSubmit}
          sx={{ width: "170px", height: "45px", mx: "auto", mt: "15px" }}
        >
          Register Office
        </FilledButton>
      </FormControl>
    </Box>
  );
};

export default RegisterOfficeForm;
