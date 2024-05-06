// UserListContext.js
import React, { createContext, useContext, useState } from "react";
import usersListData from "../data/usersList";
const UserListContext = createContext();

export const useUserList = () => useContext(UserListContext);

export const UserListProvider = ({ children }) => {
  const [usersList, setUsersList] = useState([usersListData]);
  //we defined registerStaff here cos we need to display the form when editUser is triggered from UserListRow
  const [registerStaff, setRegisterStaff] = useState(false);

  function generateRandomID() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let id = "";
    for (let i = 0; i < 4; i++) {
      id += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for (let i = 0; i < 2; i++) {
      id += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return id;
  }

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
    staffId: generateRandomID(),
  });

  const updateUsersList = (newList) => {
    setUsersList(newList);
  };

  const editUser = (staffId) => {
    const userToEdit = usersList.find((user) => user.staffId == staffId);
    setFormData({
      name: userToEdit.name,
      department: "",
      title: userToEdit.title,
      phoneNumber: userToEdit.phoneNumber,
      role: "",
      email: userToEdit.email,
      clockIn: userToEdit.clockIn,
      clockOut: userToEdit.clockOut,
      gender: "",
      passport: userToEdit.passport,
      resume: userToEdit.resume,
      signature: userToEdit.signature,
      homeAddress: userToEdit.homeAddress,
      additionalNotes: userToEdit.additionalNotes,
      staffId: userToEdit.staffId,
    });
    setRegisterStaff(true);
  };

  const deleteUser = (staffId) => {
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
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
