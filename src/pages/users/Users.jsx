import { Box, Stack, Typography, styled } from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import RegisterStaffForm from "../../components/RegisterStaffForm";
import { useEffect, useState } from "react";
import AdminListView from "../../components/AdminListView";
import HOSListView from "../../components/HOSListView";
import StaffListView from "../../components/StaffListView";
import { useUserList } from "../../components/UserListContext";
import ConfirmationPopup from "../../components/ConfirmationPopup";

const Overlay = styled("Box")({
  zIndex: 10,
  position: "fixed",
  top: 0,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Users = () => {
  // const [registerStaff, setRegisterStaff] = useState(false);
  const {
    registerStaff,
    setRegisterStaff,
    setFormData,
    editStaffForm,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
  } = useUserList();
  const [showRegConfirmation, setShowRegConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setShowRegConfirmation(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setShowEditConfirmation(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setShowDeleteConfirmation(false);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setFormData({});
    setRegisterStaff(true);
  };

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
          <FilledButton onClick={handleClick}>Register Staff</FilledButton>
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
        <Overlay>
          <RegisterStaffForm
            formType="register staff"
            setRegisterStaff={setRegisterStaff}
            setShowRegConfirmation={setShowRegConfirmation}
            setShowEditConfirmation={setShowEditConfirmation}
          />
        </Overlay>
      )}
      {editStaffForm && (
        <Overlay>
          <RegisterStaffForm
            formType="edit user"
            setRegisterStaff={setRegisterStaff}
            setShowRegConfirmation={setShowRegConfirmation}
            setShowEditConfirmation={setShowEditConfirmation}
          />
        </Overlay>
      )}
      {showRegConfirmation && (
        <ConfirmationPopup
          text={
            "Your staff has been registered successfully, you can now edit, delete or reassign them."
          }
        />
      )}
      {showEditConfirmation && (
        <ConfirmationPopup text={"You have successfully edited your staff."} />
      )}
      {showDeleteConfirmation && (
        <ConfirmationPopup text={"You have successfully Deleted a staff."} />
      )}
    </>
  );
};

export default Users;
