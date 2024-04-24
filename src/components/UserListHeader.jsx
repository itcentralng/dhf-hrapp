import React from "react";
import sortAscending from "../assets/Sort ascending.svg";
import { Checkbox, Stack, styled } from "@mui/material";

const TableHeadText = styled("Typography")({
  fontFamily: "DM sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
});

const UserListHeader = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
          width: "50%",
          alignItems: "center",
        }}
      >
        <Checkbox checked={checked} onChange={handleChange} />
        <TableHeadText>
          Staff Name{" "}
          <span>
            <img src={sortAscending} alt="" />
          </span>
        </TableHeadText>
        <TableHeadText>Title</TableHeadText>
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
