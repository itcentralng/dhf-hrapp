import React, { useState } from "react";
import { Select, MenuItem, FormControl, Chip } from "@mui/material";
import usersList from "../data/usersList";

const UserSelect = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelect = (event) => {
    const { value } = event.target;
    setSelectedUsers(value);
  };

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
                key={user.role}
                label={user.name}
                style={{ marginRight: 5 }}
              />
            ))}
          </div>
        )}
      >
        {usersList.map((user) => (
          <MenuItem key={user} value={user}>
            {user.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;
