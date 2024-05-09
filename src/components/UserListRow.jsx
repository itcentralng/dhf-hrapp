import {
  Box,
  Checkbox,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { DeleteOutline } from "@mui/icons-material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import { useUserList } from "./UserListContext";
const TableBodyText = styled(Typography)({
  fontFamily: "inter",
  fontWeight: 400,
  fontSize: "14px",
  color: "#6E7079",
  textAlign: "center",
  minWidth: "60px",
});

const UserListRow = ({ name, title, role, staffId, checked }) => {
  const [singleChecked, setSingleChecked] = React.useState(false);
  const { editUser, deleteUser } = useUserList();

  useEffect(() => {
    if (checked) {
      setSingleChecked(true);
    } else {
      setSingleChecked(false);
    }
  }, [checked]);

  const handleChange = (event) => {
    setSingleChecked(event.target.checked);
  };
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "55%",
          alignItems: "center",
        }}
      >
        <Checkbox checked={singleChecked} onChange={handleChange} />
        <TableBodyText>{name}</TableBodyText>
        <TableBodyText>{title}</TableBodyText>
        <TableBodyText>{role}</TableBodyText>
        <Box
          onClick={() => {
            alert("ID copied to clipboard");
            navigator.clipboard.writeText(staffId);
          }}
          sx={{ cursor: "pointer" }}
        >
          <TableBodyText sx={{ width: "40px" }}>{staffId}</TableBodyText>
          <ContentCopyRoundedIcon
            sx={{ width: "12px", height: "12px", color: "#6E7079", ml: "10px" }}
          />
        </Box>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "20%",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => editUser(staffId)}>
          <EditOutlinedIcon sx={{ color: "rgba(85, 85, 85, 0.6)" }} />
        </IconButton>
        <IconButton onClick={() => deleteUser(staffId)}>
          <DeleteOutline sx={{ color: "rgba(85, 85, 85, 0.6)" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default UserListRow;
