const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

export const DeleteUserRequest = async (
  userId,
  setLoading,
  setShowDeleteConfirmation
) => {
  setLoading(true);

  try {
    const deletedUser = {
      user_id: userId,
    };
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/user/user/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: deletedUser,
      }
    );

    if (!response.ok) {
      console.log(deletedUser);
      throw new Error(`Could not delete user!`);
    }

    const result = await response.json();
    console.log(result);
    setShowDeleteConfirmation(true);
  } catch (error) {
    console.log("User not deleted: ", deletedUser);
    console.error("There was an error deleting the user!", error);
  } finally {
    setLoading(false);
  }
};
