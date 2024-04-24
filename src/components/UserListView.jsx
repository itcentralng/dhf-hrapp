import React from "react";
import UserListHeader from "./UserListHeader";
import usersList from "../data/usersList";
import { Box } from "@mui/material";
import UserListRow from "./UserListRow";
const UserListView = () => {
  return (
    <Box sx={{ bgcolor: "white", padding: "48px 20px", borderRadius: "6px" }}>
      <UserListHeader />
      {usersList.map((user, id) => (
        <Box key={id}>
          <UserListRow {...user} />
        </Box>
      ))}
    </Box>
  );
};

export default UserListView;
