/* eslint-disable react/no-unescaped-entities */
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
import { useRef, useState } from "react";
import DocDetailsAndButton from "./DocDetailsAndButton";
import { Overlay } from "../../styled-components/styledBox";
import ShareWithForm from "../../components/ShareWithForm";
import { useShareForm } from "../../components/context/ShareFormContext";

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
  applicantSign: yup.string().required("Required"),
  date: yup.string().required("Required"),
  //   part b
  relevance: yup.string().required("Required"),
  applicantJobDesc: yup.string().required("Required"),
  dutiesToCover: yup.string().required("Required"),
  remarks: yup.string(),
  headTeacherName: yup.string().required("Required"),
  headPost: yup.string().required("Required"),
  headSign: yup.string().required("Required"),
  headDate: yup.string().required("Required"),
  //   part c
  salaryCost: yup.string().required("Required"),
  accountantName: yup.string().required("Required"),
  accountantPost: yup.string().required("Required"),
  accountantDate: yup.string().required("Required"),
  //   part d
  approvalGrant: yup.string().required("Required"),
  grantWithPay: yup.string().required("Required"),
  grantedProgram: yup.string().required("Required"),
  yearsAfterResumption: yup.string().required("Required"),
  certificateUpgrade: yup.string().required("Required"),
  grantConfirmation: yup.string().required("Required"),
  beneficiaryNumber: yup.string().required("Required"),
  applicantNotSupported: yup.string(),
  hrName: yup.string().required("Required"),
  hrPost: yup.string().required("Required"),
  hrDate: yup.string().required("Required"),
  //   part e
  approvalStatus: yup.string().required("Required"),
  directorsDate: yup.string().required("Required"),
});

const StudyLeave = () => {
  const user = useSelector((state) => state.user.user);
  const fileInputRef = useRef(null);
  const [documentTitle, setDocumentTitle] = useState("Study Leave");
  const { displayShareForm } = useShareForm();

  const formik = useFormik({
    initialValues: {
      // part a
      fullname: `${user.first_name} ${user.last_name}`,
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
      applicantSign: "",
      date: "",
      //   part b
      relevance: "",
      applicantJobDesc: "",
      dutiesToCover: "",
      remarks: "",
      headTeacherName: "",
      headPost: "",
      headSign: "",
      headDate: "",
      //   part c
      salaryCost: "",
      accountantName: "",
      accountantPost: "",
      accountantSign: File | null,
      accountantDate: "",
      //   part d
      approvalGrant: "",
      grantWithPay: "",
      grantedProgram: "",
      yearsAfterResumption: "",
      certificateUpgrade: "",
      grantConfirmation: "",
      beneficiaryNumber: "",
      applicantNotSupported: "",
      hrName: "",
      hrPost: "",
      hrSign: File | null,
      hrDate: "",
      //   part e
      approvalStatus: "",
      directorsSign: File | null,
      directorsDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleAccountantSign = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log(file.name);
      formik.setFieldValue("accountantSign", file.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHrSign = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log(file.name);
      formik.setFieldValue("hrSign", file.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDirectorsSign = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      console.log(file.name);
      formik.setFieldValue("hrSign", file.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <DocDetailsAndButton
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: "20px",
        }}
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
            <Box>
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
                  <TextField
                    variant="standard"
                    id="applicantSign"
                    name="applicantSign"
                    value={formik.values.applicantSign}
                    onChange={formik.handleChange}
                    sx={{ width: "60%" }}
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
                  <InputLabel id="applicantJobDesc" sx={{ fontWeight: 800 }}>
                    Give brief description of the applicant current job?
                  </InputLabel>
                  <textarea
                    id="applicantJobDesc"
                    name="applicantJobDesc"
                    value={formik.values.applicantJobDesc}
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
                  <InputLabel id="dutiesToCover" sx={{ fontWeight: 800 }}>
                    What duties will require cover during this period of study?
                  </InputLabel>
                  <textarea
                    id="dutiesToCover"
                    name="dutiesToCover"
                    value={formik.values.dutiesToCover}
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
                  <InputLabel id="remarks" sx={{ fontWeight: 800 }}>
                    Any other remarks?
                  </InputLabel>
                  <textarea
                    id="remarks"
                    name="remarks"
                    value={formik.values.remarks}
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
                    width: "52%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="headTeacherName" sx={{ fontWeight: 800 }}>
                    Name of Appraiser:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="headTeacherName"
                    name="headTeacherName"
                    value={formik.values.headTeacherName}
                    onChange={formik.handleChange}
                    sx={{ width: "62%" }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    width: "46%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="headPost" sx={{ fontWeight: 800 }}>
                    Post:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="headPost"
                    name="headPost"
                    value={formik.values.headPost}
                    onChange={formik.handleChange}
                    sx={{ width: "85%" }}
                  />
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
                  <InputLabel id="headSign" sx={{ fontWeight: 800 }}>
                    Signature:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="headSign"
                    name="headSign"
                    value={formik.values.headSign}
                    onChange={formik.handleChange}
                    sx={{ width: "85%" }}
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

              {/* part c */}
              <Typography
                variant="body2"
                sx={{ fontSize: "1.2rem", margin: "1em 0" }}
              >
                Part C: To be completed by the accountant
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
                  <InputLabel id="salaryCost" sx={{ fontWeight: 800 }}>
                    What are the salary costs for this applicant for the
                    duration of his/her study?
                  </InputLabel>
                  <textarea
                    id="salaryCost"
                    name="salaryCost"
                    value={formik.values.salaryCost}
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
                    width: "52%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="accountantName" sx={{ fontWeight: 800 }}>
                    Name of Appraiser:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="accountantName"
                    name="accountantName"
                    value={formik.values.accountantName}
                    onChange={formik.handleChange}
                    sx={{ width: "62%" }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    width: "46%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="accountantPost" sx={{ fontWeight: 800 }}>
                    Post:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="accountantPost"
                    name="accountantPost"
                    value={formik.values.accountantPost}
                    onChange={formik.handleChange}
                    sx={{ width: "85%" }}
                  />
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
                  <InputLabel id="accountantSign" sx={{ fontWeight: 800 }}>
                    Signature:
                  </InputLabel>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAccountantSign}
                    placeholder="upload signature"
                    accept="image/jpeg, image/jpg, image/png"
                    value={
                      formik.values.accountantSign
                        ? formik.values.accountantSign.name
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
                  <InputLabel id="accountantDate" sx={{ fontWeight: 800 }}>
                    Date:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="accountantDate"
                    name="accountantDate"
                    value={formik.values.accountantDate}
                    onChange={formik.handleChange}
                    sx={{ width: "80%" }}
                  />
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                sx={{ fontSize: "1.2rem", margin: "1em 0" }}
              >
                Part D: To be completed by Human Resource Officer
              </Typography>

              <Grid container gap={2}>
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
                  <InputLabel id="approvalGrant" sx={{ fontWeight: 800 }}>
                    Have the applicant been granted approval to pursue further
                    studies before?
                  </InputLabel>
                  <RadioGroup
                    onChange={formik.handleChange}
                    value={
                      formik.values.approvalGrant === undefined
                        ? ""
                        : formik.values.approvalGrant
                    }
                    name="approvalGrant"
                    id="approvalGrant"
                    row
                    sx={{ width: "35%" }}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                      labelPlacement="start"
                    />
                  </RadioGroup>
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
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1rem", width: "30%" }}
                  >
                    This is to confirm that
                  </Typography>
                  <TextField
                    variant="standard"
                    id="grantConfirmation"
                    name="grantConfirmation"
                    value={formik.values.grantConfirmation}
                    onChange={formik.handleChange}
                    sx={{ width: "50%" }}
                  />
                  <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                    have satisfied the requirement indicated in the study leave
                    policy and has been duly selected among suitable applicant
                    to further his/her education.
                  </Typography>
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
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1rem", width: "30%" }}
                  >
                    His/ Her beneficiary number is
                  </Typography>
                  <TextField
                    variant="standard"
                    id="beneficiaryNumber"
                    name="beneficiaryNumber"
                    value={formik.values.beneficiaryNumber}
                    onChange={formik.handleChange}
                    sx={{ width: "50%" }}
                  />
                  <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                    on the provisional list submitted to the Admin Office. Based
                    on the above, I recommend his/her approval for processing.
                  </Typography>
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
                  <InputLabel
                    id="applicantNotSupported"
                    sx={{ fontWeight: 800 }}
                  >
                    If the Applicant is not supported (Please states reasons.)
                  </InputLabel>
                  <textarea
                    id="applicantNotSupported"
                    name="applicantNotSupported"
                    value={formik.values.applicantNotSupported}
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
                    width: "52%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="hrName" sx={{ fontWeight: 800 }}>
                    Name of Appraiser:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="hrName"
                    name="hrName"
                    value={formik.values.hrName}
                    onChange={formik.handleChange}
                    sx={{ width: "62%" }}
                  />
                </Grid>

                <Grid
                  item
                  sx={{
                    width: "46%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <InputLabel id="hrPost" sx={{ fontWeight: 800 }}>
                    Post:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="hrPost"
                    name="hrPost"
                    value={formik.values.hrPost}
                    onChange={formik.handleChange}
                    sx={{ width: "85%" }}
                  />
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
                  <InputLabel id="hrSign" sx={{ fontWeight: 800 }}>
                    Signature:
                  </InputLabel>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleHrSign}
                    placeholder="upload signature"
                    accept="image/jpeg, image/jpg, image/png"
                    value={
                      formik.values.hrSign ? formik.values.hrSign.name : ""
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
                  <InputLabel id="hrDate" sx={{ fontWeight: 800 }}>
                    Date:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="hrDate"
                    name="hrDate"
                    value={formik.values.hrDate}
                    onChange={formik.handleChange}
                    sx={{ width: "80%" }}
                  />
                </Grid>
              </Grid>

              {/* part e */}

              <Typography
                variant="body2"
                sx={{ fontSize: "1.2rem", margin: "1em 0" }}
              >
                Part E: Director's Recommendation
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
                  <InputLabel id="approvalStatus" sx={{ fontWeight: 800 }}>
                    Approved / Not Approved; If Approved State conditions:
                  </InputLabel>
                  <textarea
                    id="approvalStatus"
                    name="approvalStatus"
                    value={formik.values.approvalStatus}
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
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <InputLabel id="directorsSign" sx={{ fontWeight: 800 }}>
                    Signature/Stamp:
                  </InputLabel>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleDirectorsSign}
                    placeholder="upload signature"
                    accept="image/jpeg, image/jpg, image/png"
                    value={
                      formik.values.directorsSign
                        ? formik.values.directorsSign.name
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
                  <InputLabel id="directorsDate" sx={{ fontWeight: 800 }}>
                    Date:
                  </InputLabel>
                  <TextField
                    variant="standard"
                    id="directorsDate"
                    name="directorsDate"
                    value={formik.values.directorsDate}
                    onChange={formik.handleChange}
                    sx={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm
            documentType={documentTitle}
            formData={formik.values}
          />
        </Overlay>
      )}
    </Box>
  );
};

export default StudyLeave;