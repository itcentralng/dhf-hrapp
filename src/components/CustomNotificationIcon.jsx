/* eslint-disable react/prop-types */
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

const CustomNotificationIcon = ({ notificationNumber }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        size="large"
        color="inherit"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "6px",
          border: "1px solid #E7EAE9",
        }}
      >
        <Badge badgeContent={notificationNumber} color="error">
          <NotificationsNoneOutlined sx={{ color: "#000" }} />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default CustomNotificationIcon;
