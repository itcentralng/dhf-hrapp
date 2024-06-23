import { useState } from "react";
import { Select, MenuItem, FormControl, Chip } from "@mui/material";
import { useGetUsersQuery } from "../state/api";
import { Close } from "@mui/icons-material";

const UserSelect = ({ onUserSelect }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const RemoveRecipient = (fullName) => {
    const updatedUsers = selectedUsers.filter(
      (user) => `${user.first_name} ${user.last_name}` !== fullName
    );
    setSelectedUsers(updatedUsers);
    onUserSelect(updatedUsers); // Notify parent component of updated selected users
  };

  const handleUserSelect = (event) => {
    const { value } = event.target;
    setSelectedUsers(value);
    onUserSelect(value); // Notify parent component of selected users
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
                key={user.id} // Ensure correct key
                label={`${user.first_name} ${user.last_name}`}
                onDelete={() =>
                  RemoveRecipient(`${user.first_name} ${user.last_name}`)
                }
                deleteIcon={<Close />}
                style={{ marginRight: 5 }}
              />
            ))}
          </div>
        )}
      >
        {users?.map((user) => (
          <MenuItem key={user.id} value={user}>
            {user.first_name} {user.last_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;
