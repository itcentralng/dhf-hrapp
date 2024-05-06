import { Box, Stack, Typography } from "@mui/material";
import UserListView from "../../components/UserListView";
import { FilledButton } from "../../styled-components/styledButtons";
import RegisterStaffForm from "../../components/RegisterStaffForm";
import { useState } from "react";
import AdminListView from "../../components/AdminListView";
import HOSListView from "../../components/HOSListView";
import StaffListView from "../../components/StaffListView";
import { useUserList } from "../../components/UserListContext";

const Users = () => {
  // const [registerStaff, setRegisterStaff] = useState(false);
  const { registerStaff, setRegisterStaff } = useUserList();

  return (
    <>
      <Box>
        <Stack
          direction="row"
          sx={{ padding: "30px", justifyContent: "space-between" }}
        >
          <Typography
            sx={{
              fontFamily: "DM sans",
              fontWeight: 500,
              fontSize: "18px",
              color: "black",
            }}
          >
            Staff
          </Typography>
          <FilledButton onClick={() => setRegisterStaff(true)}>
            Register Staff
          </FilledButton>
        </Stack>
        <StaffListView />
        <Typography
          sx={{
            fontFamily: "DM sans",
            fontWeight: 500,
            fontSize: "18px",
            color: "black",
            padding: "30px",
          }}
        >
          Admin
        </Typography>
        <AdminListView />
        <Typography
          sx={{
            fontFamily: "DM sans",
            fontWeight: 500,
            fontSize: "18px",
            color: "black",
            padding: "30px",
          }}
        >
          Head Of Section
        </Typography>
        <HOSListView />
      </Box>
      {registerStaff && (
        <Box
          sx={{
            zIndex: 10,
            position: "fixed",
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RegisterStaffForm setRegisterStaff={setRegisterStaff} />
        </Box>
      )}
    </>
  );
};

export default Users;
