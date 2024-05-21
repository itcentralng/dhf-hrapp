/* eslint-disable react/prop-types */
import sortAscending from "../assets/Sort ascending.svg";
import { Box, Checkbox, Stack, Typography, styled } from "@mui/material";

const TableHeadText = styled(Typography)({
  fontFamily: "DM sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
  textAlign: "center",
  minWidth: "50px",
});

const UserListHeader = ({ checked, handleChange }) => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "#E1E2E9 1px solid",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "53%",
          alignItems: "center",
        }}
      >
        <Checkbox checked={checked} onChange={handleChange} />
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TableHeadText>Staff Name </TableHeadText>
          <span>
            <img src={sortAscending} alt="" />
          </span>
        </Box>
        {/* <TableHeadText>Title</TableHeadText> */}
        <TableHeadText>Role</TableHeadText>
        <TableHeadText>Staff Id</TableHeadText>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          width: "20%",
          alignItems: "center",
        }}
      >
        <TableHeadText>Edit</TableHeadText>
        <TableHeadText>Delete</TableHeadText>
      </Stack>
    </Stack>
  );
};

export default UserListHeader;
