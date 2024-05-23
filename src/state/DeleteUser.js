const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

export const DeleteUserRequest = async (
  userId,
  setLoading,
  setShowDeleteConfirmation
) => {
  setLoading(true);
  const proceed = confirm(
    `Are you sure you want to delete the user with id: ${userId}?`
  );

  try {
    if (proceed) {
      const deletedUser = {
        user_id: userId,
      };
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/user/user`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(deletedUser),
        }
      );

      if (!response.ok) {
        console.log(deletedUser);
        alert(`Could not delete user!`);
      } else {
        alert("User deleted successfully");
        setShowDeleteConfirmation(true);
      }
    } else {
      alert("Press okay to continue");
    }
  } catch (error) {
    alert("User not deleted");
    console.error("There was an error deleting the user!", error);
  } finally {
    setLoading(false);
  }
};
