import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  Modal,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { FilledButton } from "../../styled-components/styledButtons";
import RegisterStaffForm from "../../components/RegisterStaffForm";
import { useEffect, useState } from "react";
import AdminListView from "../../components/AdminListView";
import HOSListView from "../../components/HOSListView";
import StaffListView from "../../components/StaffListView";
import { useUserList } from "../../components/UserListContext";
import ConfirmationPopup from "../../components/ConfirmationPopup";
// import { Overlay } from "../../styled-components/styledBox";
// import RegisterOfficeForm from "../../components/RegisterOfficeForm";
const Users = () => {
  // const [registerStaff, setRegisterStaff] = useState(false);
  const {
    setFormData,
    editStaffForm,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    openEdit,
    setOpenEdit,
    handleEditClose,
  } = useUserList();
  const [showRegConfirmation, setShowRegConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  // const [showOfficeConf, setShowOfficeConf] = useState(false);
  // const [registerOffice, setRegisterOffice] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  //modal
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  // const options = ["New Staff", "New Office"];
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

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setShowOfficeConf(false);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleClick = () => {
    setFormData({});
    handleModalOpen();
    // setRegisterStaff(true);
  };

  const handleClickr = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleSelect = (option) => {
  //   handleClose();
  //   switch (option) {
  //     case "New Staff":
  //       setFormData({});
  //       setRegisterStaff(true);
  //       break;
  //     case "New Office":
  //       setRegisterOffice(true);
  //   }
  // };

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
          <FilledButton onClick={handleClick}>Register</FilledButton>
        </Stack>
        {/* <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleSelect(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu> */}
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
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <RegisterStaffForm
          formType="register staff"
          setShowRegConfirmation={setShowRegConfirmation}
          setShowEditConfirmation={setShowEditConfirmation}
          handleModalClose={handleModalClose}
        />
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RegisterStaffForm
          formType="edit user"
          setShowRegConfirmation={setShowRegConfirmation}
          setShowEditConfirmation={setShowEditConfirmation}
        />
      </Modal>

      {/* {registerOffice && (
        <Overlay>
          <RegisterOfficeForm
            setShowEditConfirmation={setShowEditConfirmation}
            setShowOfficeConf={setShowOfficeConf}
            setRegisterOffice={setRegisterOffice}
          />
        </Overlay>
      )} */}
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
      {/* {showOfficeConf && (
        <ConfirmationPopup
          text={"You have successfully registered an office."}
        />
      )} */}
    </>
  );
};

export default Users;
