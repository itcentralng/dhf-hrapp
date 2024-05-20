import React, { useState } from "react";
import { Select, MenuItem, FormControl, Chip, TextField } from "@mui/material";
import { useGetUsersQuery } from "../state/api";

const UserSelect = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleUserSelect = (event) => {
    const { value } = event.target;
    setSelectedUsers(value);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <FormControl fullWidth>
      <Select
        id="user-select"
        multiple
        value={selectedUsers}
        onChange={handleUserSelect}
        renderValue={(selected) => (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selected.map((user) => (
              <Chip
                key={user.user_id} // Ensure correct key
                label={`${user.first_name} ${user.last_name}`}
                style={{ marginRight: 5 }}
              />
            ))}
          </div>
        )}
      >
        {users
          ?.filter((user) =>
            user.first_name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((user) => (
            <MenuItem key={user.user_id} value={user}>
              {user.first_name} {user.last_name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;
