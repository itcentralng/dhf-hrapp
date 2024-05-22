import React, { createContext, useContext, useEffect, useState } from "react";

import { useGetUsersQuery } from "../state/api";
const UserListContext = createContext();

export const useUserList = () => useContext(UserListContext);

export const UserListProvider = ({ children }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  const [usersList, setUsersList] = useState(users);
  //we defined registerStaff here cos we need to display the form when editUser is triggered from UserListRow
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleEditOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);
  // const [passport, setPassport] = useState();
  // const [resume, setResume] = useState();
  // const [signature, setSignature] = useState();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    title: "",
    phoneNumber: "",
    role: "",
    email: "",
    clockIn: "",
    clockOut: "",
    gender: "",
    passport: null,
    resume: null,
    signature: null,
    homeAddress: "",
    additionalNotes: "",
    staffId: "",
  });

  const updateUsersList = (newList) => {
    setUsersList(newList);
  };

  const editUser = (staffId) => {
    const userToEdit = usersList?.find((user) => user.user_id == staffId);
    console.log(userToEdit);
    setFormData({
      name: `${userToEdit?.first_name} ${userToEdit?.last_name}` || "",
      department: userToEdit?.department || "",
      title: userToEdit?.title || "",
      phoneNumber: userToEdit?.phone || "",
      role: userToEdit?.role || "",
      email: userToEdit?.email || "",
      clockIn: userToEdit?.clockIn || "",
      clockOut: userToEdit?.clockOut || "",
      gender: userToEdit?.gender || "",
      /**issue: HTML specs in this case passport, resume, and signature,
       * won't allow you to set a value on file inputs.
       * Only the user can select a file to upload by clicking on
       * the file button, and selecting the file location on their computer.
       * Meaning we cant set user files to the form file inputs while trying to edit as we did
       * for the other regular inputs*/
      passport: null,
      resume: null,
      signature: null,
      homeAddress: userToEdit?.homeAddress || "",
      additionalNotes: userToEdit?.additionalNotes || "",
      staffId: userToEdit?.staffId || "",
    });
    handleEditOpen();
  };

  const deleteUser = (staffId) => {
    setUsersList(usersList?.filter((item) => item.user_id !== staffId));
    setShowDeleteConfirmation(true);
  };
  const removeUserForEdit = (staffId) => {
    setUsersList(usersList?.filter((item) => item.user_id !== staffId));
  };

  return (
    <UserListContext.Provider
      value={{
        usersList,
        updateUsersList,
        editUser,
        deleteUser,
        formData,
        setFormData,
        // passport,
        // setPassport,
        // resume,
        // setResume,
        // signature,
        // setSignature,
        showDeleteConfirmation,
        setShowDeleteConfirmation,
        removeUserForEdit,
        handleEditOpen,
        handleEditClose,
        openEdit,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
