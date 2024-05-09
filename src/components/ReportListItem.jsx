import { Checkbox, IconButton, Stack, Typography, styled } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Text = styled(Typography)({
  fontWeight: 400,
  fontSize: "16px",
  color: "#252C32",
  fontFamily: "inter",
});

const ReportListItem = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack
      direction="row"
      sx={{
        height: "62px",
        px: "16px",
        borderBottom: "#3C40434D 1px solid",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Checkbox checked={checked} onChange={handleChange} />
        <Text>Leave of Absence Report 12/09/35</Text>
      </Stack>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <Text>Dec 30, 09:42 PM</Text>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ReportListItem;
