import { Box, styled } from "@mui/material";

const CenteredBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Overlay = styled("Box")({
  zIndex: 10,
  position: "fixed",
  top: 0,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export { CenteredBox, Overlay };
