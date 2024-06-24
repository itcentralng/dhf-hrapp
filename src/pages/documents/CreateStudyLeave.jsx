/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useShareForm } from "../../components/context/ShareFormContext";
import ShareWithForm from "../../components/ShareWithForm";
import { Overlay } from "../../styled-components/styledBox";
import DocDetailsAndButton from "./DocDetailsAndButton";

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

const CreateStudyLeave = () => {
  const user = useSelector((state) => state.user.user);
  const [documentTitle, setDocumentTitle] = useState("Study Leave");
  const { displayShareForm } = useShareForm();

  const formik = useFormik({
    initialValues: {
      // part a
      fullname: "",
      designation: "",
      appointmentDate: "",
      yearsServed: "",
      instituteOfStudy: "",
      courseOfStudy: "",
      areaOfStudy: "Diploma",
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
      accountantSign: "",
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
      hrSign: "",
      hrDate: "",
      //   part e
      approvalStatus:
        "Please approve/disapprove as a comment under the message",
      directorsSign: "",
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                  <TextField
                    disabled={user.role != "staff"}
                    variant="standard"
                    id="areaOfStudy"
                    name="areaOfStudy"
                    value={formik.values.areaOfStudy}
                    onChange={formik.handleChange}
                    sx={{ width: "75%" }}
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
                  <InputLabel id="durationOfStudy" sx={{ fontWeight: 800 }}>
                    Duration of Study:
                  </InputLabel>
                  <TextField
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    achieved?
                  </InputLabel>
                  <textarea
                    disabled={user.role != "staff"}
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
                  <TextField
                    disabled={user.role != "staff"}
                    variant="standard"
                    id="pursureIndication"
                    name="pursureIndication"
                    value={formik.values.pursureIndication}
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
                  }}
                >
                  <InputLabel id="applicantSign" sx={{ fontWeight: 800 }}>
                    Signature of Applicant:
                  </InputLabel>
                  <TextField
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "staff"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                    disabled={user.role != "hos"}
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
                  <InputLabel id="headDate" sx={{ fontWeight: 800 }}>
                    Date:
                  </InputLabel>
                  <TextField
                    disabled={user.role != "hos"}
                    variant="standard"
                    id="headDate"
                    name="headDate"
                    value={formik.values.headDate}
                    onChange={formik.handleChange}
                    sx={{ width: "80%" }}
                  />
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                sx={{ fontSize: "1.2rem", margin: "1em 0" }}
              >
                Part C: To be completed by Human Resource Officer
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
                  <TextField
                    disabled={user.role != "hr"}
                    variant="standard"
                    id="approvalGrant"
                    name="approvalGrant"
                    value={formik.values.approvalGrant}
                    onChange={formik.handleChange}
                    sx={{ width: "30%" }}
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
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "1rem", width: "30%" }}
                  >
                    This is to confirm that
                  </Typography>
                  <TextField
                    disabled={user.role != "hr"}
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
                    disabled={user.role != "hr"}
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
                    disabled={user.role != "hr"}
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
                    disabled={user.role != "hr"}
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
                    disabled={user.role != "hr"}
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
                  <TextField
                    disabled={user.role != "hr"}
                    variant="standard"
                    id="hrSign"
                    name="hrSign"
                    value={formik.values.hrSign}
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
                  <InputLabel id="hrDate" sx={{ fontWeight: 800 }}>
                    Date:
                  </InputLabel>
                  <TextField
                    disabled={user.role != "hr"}
                    variant="standard"
                    id="hrDate"
                    name="hrDate"
                    value={formik.values.hrDate}
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

export default CreateStudyLeave;
