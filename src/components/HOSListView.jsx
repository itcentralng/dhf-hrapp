import React, { useState } from "react";
import UserListHeader from "./UserListHeader";
import { Box } from "@mui/material";
import UserListRow from "./UserListRow";
import Pagination from "./Pagination";
import { useGetUsersQuery } from "../state/api";

const HOSListView = () => {
  const { data: users } = useGetUsersQuery();

  const hosList = users?.filter((user) => user.role === "hos") || [];
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
      {currentItems.map((user) => (
        <Box key={user.user_id}>
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

export default HOSListView;
