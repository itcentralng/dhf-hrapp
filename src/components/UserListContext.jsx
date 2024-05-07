import React, { createContext, useContext, useEffect, useState } from "react";
import usersListData from "../data/usersList";
const UserListContext = createContext();

export const useUserList = () => useContext(UserListContext);

export const UserListProvider = ({ children }) => {
  const initialUsersList =
    JSON.parse(localStorage.getItem("usersList")) || usersListData;
  const [usersList, setUsersList] = useState(initialUsersList);
  //we defined registerStaff here cos we need to display the form when editUser is triggered from UserListRow
  const [registerStaff, setRegisterStaff] = useState(false);
  const [editStaffForm, setEditStaffForm] = useState(false);
  const [passport, setPassport] = useState(null);
  const [resume, setResume] = useState(null);
  const [signature, setSignature] = useState(null);
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
    passport: passport,
    resume: signature,
    signature: resume,
    homeAddress: "",
    additionalNotes: "",
    staffId: "",
  });

  useEffect(() => {
    console.log("Saving usersList to localStorage:", usersList);
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList]);

  const updateUsersList = (newList) => {
    setUsersList(newList);
  };

  const editUser = (staffId) => {
    const userToEdit = usersList.find((user) => user.staffId == staffId);
    setFormData({
      name: userToEdit.name,
      department: userToEdit.department,
      title: userToEdit.title,
      phoneNumber: userToEdit.phoneNumber,
      role: userToEdit.role,
      email: userToEdit.email,
      clockIn: userToEdit.clockIn,
      clockOut: userToEdit.clockOut,
      gender: userToEdit.gender,
      passport: userToEdit.passport,
      resume: userToEdit.resume,
      signature: userToEdit.signature,
      homeAddress: userToEdit.homeAddress,
      additionalNotes: userToEdit.additionalNotes,
      staffId: userToEdit.staffId,
    });
    setEditStaffForm(true);
  };

  const deleteUser = (staffId) => {
    setUsersList(usersList.filter((item) => item.staffId !== staffId));
    setShowDeleteConfirmation(true);
  };
  const removeUserForEdit = (staffId) => {
    setUsersList(usersList.filter((item) => item.staffId !== staffId));
  };

  return (
    <UserListContext.Provider
      value={{
        usersList,
        updateUsersList,
        editUser,
        deleteUser,
        registerStaff,
        setRegisterStaff,
        formData,
        setFormData,
        passport,
        setPassport,
        resume,
        setResume,
        signature,
        setSignature,
        editStaffForm,
        setEditStaffForm,
        showDeleteConfirmation,
        setShowDeleteConfirmation,
        removeUserForEdit,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
