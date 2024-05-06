import React from "react";
import UserListHeader from "./UserListHeader";
// import usersList from "../data/usersList";
import { Box } from "@mui/material";
import UserListRow from "./UserListRow";
import { useUserList } from "./UserListContext";
const StaffListView = () => {
  const { usersList } = useUserList();
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box sx={{ bgcolor: "white", padding: "48px 20px", borderRadius: "6px" }}>
      <UserListHeader checked={checked} handleChange={handleChange} />
      {usersList
        .filter((user) => user.role == "Staff")
        .map((user, staffId) => (
          <Box key={staffId}>
            <UserListRow {...user} checked={checked} />
          </Box>
        ))}
    </Box>
  );
};

export default StaffListView;
