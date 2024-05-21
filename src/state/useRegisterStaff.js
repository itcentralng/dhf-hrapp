import { useRegisterStaffMutation } from "./api";

const useRegisterNewStaff = () => {
  const [registerStaff] = useRegisterStaffMutation();

  const registerNewStaff = async (
    formData,
    setLoading,
    setRegisterStaff,
    setShowRegConfirmation,
    setEditStaffForm
  ) => {
    const fullName = formData.name ? formData.name.split(" ") : ["", ""];
    const firstName = fullName[0];
    const lastName = fullName.slice(1).join(" ");

    const formDataItem = {
      first_name: firstName,
      last_name: lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      role: formData.role,
      password: formData.password,
      resumption_time: formData.clockIn,
      closing_time: formData.clockOut,
    };
    console.log(setShowRegConfirmation);
    // setLoading(true);
    // try {
    //   await registerStaff(formDataItem).unwrap();
    //   setRegisterStaff(true);
    //   setShowRegConfirmation(true);
    //   setEditStaffForm(false);
    //   console.log("User has been registered successfully!");
    // } catch (error) {
    //   console.error("There was an error uploading the document!", error);
    //   alert("Failed to register user! Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return { registerNewStaff };
};

export default useRegisterNewStaff;
