import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
import { Box } from "@mui/material";
import UserListRow from "./UserListRow";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../state/api";

const StaffListView = () => {
  const { data: users } = useGetUsersQuery();
  const staffList = users?.filter((user) => user.role === "staff");

  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalItems = staffList?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = staffList?.slice(startIndex, endIndex) || [];

  return (
    <Box sx={{ bgcolor: "white", padding: "48px 20px", borderRadius: "6px" }}>
      <UserListHeader checked={checked} handleChange={handleChange} />
      {currentItems.map((user) => (
        <Box key={user.id}>
          <UserListRow user={user} checked={checked} />
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

export default StaffListView;
