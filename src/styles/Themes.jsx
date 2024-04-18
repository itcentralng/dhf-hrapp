/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { createTheme, outlinedInputClasses } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Urbanist",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#4D90F0",
          "--TextField-brandBorderHoverColor": "#4D90F0",
          "--TextField-brandBorderFocusedColor": "#4D90F0",
          outline: "none",
          "& label.Mui-focused": {
            color: "#4D90F0",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid #4D90F0",
          borderRadius: "10px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#4D90F0",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#4D90F0",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "1px solid #787878",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "1px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "1px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {
    //     contained: {
    //       backgroundColor: "#2FD4C7",
    //       textTransform: "none",
    //       boxShadow: "none",
    //       "&:hover": {
    //         backgroundColor: "#20958c",
    //       },
    //     },
    //   },
    // },
    MuiSelect: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#4D90F0",
          "--TextField-brandBorderHoverColor": "#4D90F0",
          "--TextField-brandBorderFocusedColor": "#4D90F0",
          borderColor: "#4D90F0",
          "& label.Mui-focused": {
            color: "#4D90F0",
            borderColor: "#4D90F0",
          },
        },
      },
    },
  },
});

const Themes = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Themes;
