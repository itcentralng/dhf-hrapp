import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
// import usersList from "../data/usersList";
import { Box } from "@mui/material";
import UserListRow from "./UserListRow";
import { useUserList } from "./UserListContext";
import Pagination from "./Pagination";
const HOSListView = () => {
  const { usersList } = useUserList();
  const hosList = usersList.filter((user) => user.role == "Head Of Section");
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = hosList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = hosList.slice(startIndex, endIndex);
  return (
    <Box sx={{ bgcolor: "white", padding: "48px 20px", borderRadius: "6px" }}>
      <UserListHeader checked={checked} handleChange={handleChange} />
      {currentItems.map((user, staffId) => (
        <Box key={staffId}>
          <UserListRow {...user} checked={checked} />
        </Box>
      ))}
      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
    </Box>
  );
};

export default HOSListView;
