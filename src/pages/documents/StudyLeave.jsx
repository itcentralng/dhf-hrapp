import { Box, Typography, duration } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
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
});

const StudyLeave = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudyLeave;
