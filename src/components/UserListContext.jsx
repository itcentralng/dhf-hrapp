import React, { createContext, useContext, useEffect, useState } from "react";

import { useGetUsersQuery } from "../state/api";
import { DeleteUserRequest } from "../state/DeleteUser";
const UserListContext = createContext();

export const useUserList = () => useContext(UserListContext);

export const UserListProvider = ({ children }) => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  // console.log(users?.find((user) => user.id == 1).id);

  const [usersList, setUsersList] = useState(users);
  //we defined registerStaff here cos we need to display the form when editUser is triggered from UserListRow
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleEditOpen = () => setOpenEdit(true);
  const handleEditClose = () => setOpenEdit(false);
  const [loading, setLoading] = useState(false);

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

  // const updateUsersList = (newList) => {
  //   setUsersList(newList);
  // };

  const editUser = (staffId) => {
    const userToEdit = users?.find((user) => user.id === staffId);
    setFormData({
      name: `${userToEdit?.first_name} ${userToEdit?.last_name}` || "",
      department: userToEdit?.department || "",
      title: userToEdit?.title || "",
      phoneNumber: userToEdit?.phone || "",
      role: userToEdit?.role || "",
      email: userToEdit?.email || "",
      clockIn: userToEdit?.resumption_time || "",
      clockOut: userToEdit?.closing_time || "",
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
      user_id: userToEdit?.id,
    });
    handleEditOpen();
  };

  const deleteUser = (staffId) => {
    const userToDelete = users?.find((user) => user.id === staffId).id;
    DeleteUserRequest(userToDelete, setLoading, setShowDeleteConfirmation);
  };

  const removeUserForEdit = (staffId) => {
    setUsersList(usersList?.filter((item) => item.id !== staffId));
  };

  return (
    <UserListContext.Provider
      value={{
        usersList,
        // updateUsersList,
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
