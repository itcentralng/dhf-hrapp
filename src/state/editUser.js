const accessToken = sessionStorage.getItem("userState")
  ? JSON.parse(sessionStorage.getItem("userState")).token
  : null;

export const editUserRequest = async (formData, setLoading) => {
  setLoading(true);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/user/edit-user-details`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      console.log(JSON.stringify(formData));
      throw new Error(`Could not edit user!`);
    }
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("User with the following ID not edited: ", formData.user_id);
    console.error("There was an error deleting the user!", error);
  } finally {
    setLoading(false);
  }
};
