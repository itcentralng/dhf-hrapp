export const RegisterStaff = (formData, setLoading) => {
  const formDataItem = {
    first_name: formData.name,
    last_name: formData.name,
    email: formData.email,
    phone: formData.phoneNumber,
    role: formData.role,
    password: formData.password,
    resumption_time: formData.clockIn,
    closing_time: formData.clockOut,
  };
  console.log("Backend items: ", formDataItem);
  console.log(formData);
};
