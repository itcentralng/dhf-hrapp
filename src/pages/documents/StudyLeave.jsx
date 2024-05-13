import {
  Box,
  FormControlLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useRef } from "react";

const validationSchema = yup.object({
  // part a
  fullname: yup.string().required("Required"),
  designation: yup.string().required("Required"),
  appointmentDate: yup.string().required("Required"),
  yearsServed: yup.string().required("Required"),
  instituteOfStudy: yup.string().required("Required"),
  courseOfStudy: yup.string().required("Required"),
  areaOfStudy: yup.string().required("Required"),
  durationOfStudy: yup.string().required("Required"),
  startDate: yup.string().required("Required"),
  endDate: yup.string().required("Required"),
  educationStatus: yup.string().required("Required"),
  yearObtained: yup.string().required("Required"),
  purpose: yup.string().required("Required"),
  lastStudyPeriod: yup.string(),
  pursureIndication: yup.string().required("Required"),
  date: yup.string().required("Required"),
  //   part b
  relevance: yup.string().required("Required"),
  applicantJobDesc: yup.string().required("Required"),
  dutiesToCover: yup.string().required("Required"),
  remarks: yup.string().required("Required"),
  appraiserName: yup.string().required("Required"),
  post: yup.string().required("Required"),
  headSign: yup.string().required("Required"),
  headDate: yup.string().required("Required"),
});

const StudyLeave = () => {
  const user = useSelector((state) => state.user.user);
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      // part a
      fullname: `${user.user_details.first_name} ${user.user_details.last_name}`,
      designation: "",
      appointmentDate: "",
      yearsServed: "",
      instituteOfStudy: "",
      courseOfStudy: "",
      areaOfStudy: "",
      durationOfStudy: "",
      startDate: "",
      endDate: "",
      educationStatus: "",
      yearObtained: "",
      purpose: "",
      lastStudyPeriod: "",
      pursureIndication: "",
      applicantSign: File | null,
      date: "",
      //   part b
      relevance: "",
      applicantJobDesc: "",
      dutiesToCover: "",
      remarks: "",
      appraiserName: "",
      post: "",
      headSign: "",
      headDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleFileChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log(file.name);
      formik.setFieldValue("applicantSign", file.name); // Set the filename instead of the file object
      //   fileInputRef.current.value = ""; // Reset the value of the input element

      // const response = await uploadFile(formData).unwrap();
      // if (response) {
      //   formik.setFieldValue("file", response.url);
      //   formik.setFieldValue("fileName", file.name);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "80%",
          backgroundColor: "#fff",
          padding: "3em",
          marginBottom: "1em",
          borderRadius: "4px",
          boxShadow: "0 2px 8px 0 #E7EAE9, 0 2px 10px 0 #00000030",
          border: "1px solid #E7EAE9",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.5rem",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            study leave application
          </Typography>
          <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
            This Pro forma is intended to be read in conjunction with the
            relevant part of study leave condition and undertaking. However,
            Study leave is not an entitlement and the granting thereof are
            subject to number of constraints.
          </Typography>
          <Box component="form">
            {/* part a */}
            <Typography
              variant="body2"
              sx={{ fontSize: "1.2rem", margin: "1em 0" }}
            >
              Part A: The study leave proposal
            </Typography>
            <Grid container gap={2}>
              <Grid
                item
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="fullname" sx={{ fontWeight: 800 }}>
                  Applicant Full name:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="fullname"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  sx={{ width: "60%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="designation" sx={{ fontWeight: 800 }}>
                  Designation:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="designation"
                  name="designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  sx={{ width: "70%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="appointmentDate" sx={{ fontWeight: 800 }}>
                  Date of Appointment:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formik.values.appointmentDate}
                  onChange={formik.handleChange}
                  sx={{ width: "58%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="yearsServed" sx={{ fontWeight: 800 }}>
                  Years Served:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="yearsServed"
                  name="yearsServed"
                  value={formik.values.yearsServed}
                  onChange={formik.handleChange}
                  sx={{ width: "70%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="instituteOfStudy" sx={{ fontWeight: 800 }}>
                  Proposed Institution of Study:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="instituteOfStudy"
                  name="instituteOfStudy"
                  value={formik.values.instituteOfStudy}
                  onChange={formik.handleChange}
                  sx={{ width: "73%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="courseOfStudy" sx={{ fontWeight: 800 }}>
                  Proposed Course of Study:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="courseOfStudy"
                  name="courseOfStudy"
                  value={formik.values.courseOfStudy}
                  onChange={formik.handleChange}
                  sx={{ width: "75%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="areaOfStudy" sx={{ fontWeight: 800 }}>
                  Area of Study:
                </InputLabel>
                <RadioGroup
                  onChange={formik.handleChange}
                  value={
                    formik.values.areaOfStudy === undefined
                      ? ""
                      : formik.values.areaOfStudy
                  }
                  name="areaOfStudy"
                  id="areaOfStudy"
                  row
                  sx={{ width: "74%" }}
                >
                  <FormControlLabel
                    value="Diploma"
                    control={<Radio />}
                    label="Diploma"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Certificate"
                    control={<Radio />}
                    label="Certificate"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Degree"
                    control={<Radio />}
                    label="Degree"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="PGD"
                    control={<Radio />}
                    label="PGD"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Masters"
                    control={<Radio />}
                    label="Masters"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="PHD"
                    control={<Radio />}
                    label="PHD"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </Grid>

              <Grid
                item
                sx={{
                  width: "35%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="durationOfStudy" sx={{ fontWeight: 800 }}>
                  Duration of Study:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="durationOfStudy"
                  name="durationOfStudy"
                  value={formik.values.durationOfStudy}
                  onChange={formik.handleChange}
                  sx={{ width: "50%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "30%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="startDate" sx={{ fontWeight: 800 }}>
                  Start Date:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="startDate"
                  name="startDate"
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  sx={{ width: "60%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "30%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="endDate" sx={{ fontWeight: 800 }}>
                  End Date:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="endDate"
                  name="endDate"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  sx={{ width: "60%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="educationStatus" sx={{ fontWeight: 800 }}>
                  Current Educational Status:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="educationStatus"
                  name="educationStatus"
                  value={formik.values.educationStatus}
                  onChange={formik.handleChange}
                  sx={{ width: "59%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "35%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="yearObtained" sx={{ fontWeight: 800 }}>
                  Year / Date Obtained:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="yearObtained"
                  name="yearObtained"
                  value={formik.values.yearObtained}
                  onChange={formik.handleChange}
                  sx={{ width: "43%" }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <InputLabel id="purpose" sx={{ fontWeight: 800 }}>
                  What is the purpose of your proposed study and what do you
                  hope to achieve?
                </InputLabel>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formik.values.purpose}
                  onChange={formik.handleChange}
                  style={{
                    padding: "1em",
                    fontSize: "1rem",
                    minHeight: "2rem",
                    maxWidth: "100%",
                  }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <InputLabel id="lastStudyPeriod" sx={{ fontWeight: 800 }}>
                  When was your last period of Study (If any) and what was
                  achieved? (Please attach a copy of your last result.)
                </InputLabel>
                <textarea
                  id="lastStudyPeriod"
                  name="lastStudyPeriod"
                  value={formik.values.lastStudyPeriod}
                  onChange={formik.handleChange}
                  style={{
                    padding: "1em",
                    fontSize: "1rem",
                    minHeight: "2rem",
                    maxWidth: "100%",
                  }}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "start",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="pursureIndication" sx={{ fontWeight: 800 }}>
                  Please indicate how you intend to pursue the course:
                </InputLabel>
                <RadioGroup
                  onChange={formik.handleChange}
                  value={
                    formik.values.pursureIndication === undefined
                      ? ""
                      : formik.values.pursureIndication
                  }
                  name="pursureIndication"
                  id="pursureIndication"
                  row
                  sx={{ width: "55%" }}
                >
                  <FormControlLabel
                    value="Study leave with pay"
                    control={<Radio />}
                    label="Study leave with pay"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Study leave without pay"
                    control={<Radio />}
                    label="Study leave without pay"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Summer"
                    control={<Radio />}
                    label="Summer"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Distance"
                    control={<Radio />}
                    label="Distance"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Weekend"
                    control={<Radio />}
                    label="Weekend"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Evening"
                    control={<Radio />}
                    label="Evening"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="Sandwitch"
                    control={<Radio />}
                    label="Sandwitch"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </Grid>

              <Grid
                item
                sx={{
                  width: "60%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <InputLabel id="applicantSign" sx={{ fontWeight: 800 }}>
                  Signature of Applicant:
                </InputLabel>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  placeholder="upload signature"
                  accept="image/jpeg, image/jpg, image/png"
                  value={
                    formik.values.applicantSign
                      ? formik.values.applicantSign.name
                      : ""
                  }
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "38%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <InputLabel id="date" sx={{ fontWeight: 800 }}>
                  Date:
                </InputLabel>
                <TextField
                  variant="standard"
                  id="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  sx={{ width: "80%" }}
                />
              </Grid>
            </Grid>

            {/* part b */}

            <Typography
              variant="body2"
              sx={{ fontSize: "1.2rem", margin: "1em 0" }}
            >
              Part B: To be completed by the head teacher
            </Typography>
            <Grid container gap={2}>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: 2,
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <InputLabel id="relevance" sx={{ fontWeight: 800 }}>
                  The proposed study purpose is relevant to progressing the
                  applicant work?
                </InputLabel>
                <textarea
                  id="relevance"
                  name="relevance"
                  value={formik.values.relevance}
                  onChange={formik.handleChange}
                  style={{
                    padding: "1em",
                    fontSize: "1rem",
                    minHeight: "2rem",
                    maxWidth: "100%",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyLeave;
