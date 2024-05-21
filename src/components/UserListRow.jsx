/* eslint-disable react/prop-types */
import {
  Box,
  Checkbox,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
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

const UserListRow = ({ user, checked }) => {
  const { editUser, deleteUser } = useUserList();
  const [singleChecked, setSingleChecked] = React.useState(checked);

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
        <TableBodyText>
          {user.first_name} {user.last_name}
        </TableBodyText>
        {/* <TableBodyText>{user.title}</TableBodyText> */}
        <TableBodyText>{user.role}</TableBodyText>
        <Box
          onClick={() => {
            alert("ID copied to clipboard");
            navigator.clipboard.writeText(user.user_id);
          }}
          sx={{ cursor: "pointer" }}
        >
          <TableBodyText sx={{ width: "40px" }}>{user.user_id}</TableBodyText>
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
        <IconButton onClick={() => editUser(user.user_id)}>
          <EditOutlinedIcon sx={{ color: "rgba(85, 85, 85, 0.6)" }} />
        </IconButton>
        <IconButton onClick={() => deleteUser(user.user_id)}>
          <DeleteOutline sx={{ color: "rgba(85, 85, 85, 0.6)" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default UserListRow;
