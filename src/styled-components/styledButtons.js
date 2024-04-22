import { Button, styled } from "@mui/material";

const FilledButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#4D90F0",
  border: "1px solid transparent",
  padding: " .5em 2em",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  textAlign: "center",
  //   whiteSpace: "nowrap",
  borderRadius: "10px",
  minWidth: "10px",
  //   height: "48px",
  textTransform: "none",

  "&:hover": {
    borderColor: "#4D90F0",
    color: "#4D90F0",
  },

  "&.outlined": {
    backgroundColor: "#F9F9F9",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: "#F9F9F9",
    },
  },

  "&.white": {
    backgroundColor: "white",
    borderColor: "#CDD0D5",
    color: "#454644",
  },
}));

const FilledShadowButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#4D90F0",
  border: "1px solid transparent",
  padding: " .5em 2em",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "24px",
  textAlign: "center",
  //   whiteSpace: "nowrap",
  borderRadius: "10px",
  minWidth: "10px",
  //   height: "48px",
  textTransform: "none",
  boxShadow: "4px 4px 5px #98D7E4",

  "&:hover": {
    borderColor: "#4D90F0",
    color: "#fff",
    boxShadow: "4px 4px 5px #4D90F0",
    backgroundColor: "#407bcd",
  },

  "&.outlined": {
    backgroundColor: "#F9F9F9",
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: "#F9F9F9",
    },
  },

  "&.white": {
    backgroundColor: "white",
    borderColor: "#CDD0D5",
    color: "#454644",
  },
}));

const StyledOvalButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  border: "1px solid transparent",
  padding: "10px 28px",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  borderRadius: "13986px",
  minWidth: "10px",
  textTransform: "none",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
}));

const StyledLoadingButton = styled("button")(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  border: "1px solid transparent",
  padding: " 6px 12px",
  fontSize: "14px",
  fontWeight: "normal",
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  borderRadius: "4px",
  minWidth: "10px",
  textTransform: "none",

  "&:hover": {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  "&.activeTab": {
    boxShadow: "inset 0 3px 5px rgb(0 0 0 / 13%)",
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    border: "none",
  },

  "& > .MuiLoadingButton-loadingIndicator": {
    color: "white",
  },
}));

export {
  FilledButton,
  FilledShadowButton,
  StyledOvalButton,
  StyledLoadingButton,
};
