import { useFormik } from "formik";
import * as yup from "yup";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import logo from "../assets/hrLogo.svg";
import { FilledButton } from "../styled-components/styledButtons";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    // .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const LoginForm = () => {
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // setUserEmail(values.email);
      // setUserPassword(values.password);
      console.log(values);
    },
  });
  return (
    <Box
      sx={{
        width: 274,
        height: 277,
        borderRadius: "4px",
        border: "#CCCCCC 1px solid",
        px: "37.9px",
        py: "34.7px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "white",
        my: "auto",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{ width: "37.9px", height: "37.9px" }}
      />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "16px",
          color: "#292929",
          mt: "7.2px",
        }}
      >
        Welcome Back
      </Typography>

      <FormControl
        component="form"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CCCCCC",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          "& .MuiInputBase-input": {
            height: "9.3%",
          },
          marginTop: "14.3px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          value={formik.values.email}
          placeholder="Email Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ fontWeight: 500, fontSize: "16px" }}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          placeholder="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{ height: "77px", mt: "10px" }}
        />
        <FilledButton
          type="submit"
          sx={{ width: "170px", height: "44px", mt: "0px" }}
        >
          Log in
        </FilledButton>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
