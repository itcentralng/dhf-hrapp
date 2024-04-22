import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import icon from "../assets/whatIcon.svg";
import trash from "../assets/trashIcon.svg";
import { Stack } from "@mui/material";
const SingleEmailActionMenu = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "99%",
        height: "62px",
        px: "19px",
      }}
    >
      <ArrowBackIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      <Stack direction="row" gap={2}>
        <img src={icon} style={{ width: "22px", height: "22px" }} />
        <img src={trash} style={{ width: "22px", height: "22px" }} />
        <MoreVertSharpIcon sx={{ color: "primary.main" }} />

        <ArrowBackIosIcon sx={{ color: "primary.main" }} />
        <ArrowForwardIosIcon sx={{ color: "primary.main" }} />
      </Stack>
    </Stack>
  );
};

export default SingleEmailActionMenu;
