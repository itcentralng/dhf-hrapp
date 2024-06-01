const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

export const SubmitBlankDocument = async (formData, setLoading) => {
  setLoading(true);

  const formDataObj = new FormData();
  formDataObj.append("text", formData.text);
  formDataObj.append("title", formData.title);
  formDataObj.append("recipients", formData.recipients.join(","));
  formDataObj.append("label", formData.title);
  formDataObj.append("document", formData.document);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/messages/upload-document/`,
      {
        method: "POST",
        body: formDataObj,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      console.log(response);
      alert("Message was not sent! Please try again");
      throw new Error(`Error sending message`);
    }
    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Message was not sent! Please try again");
    console.error("There was an error sending", error);
  } finally {
    setLoading(false);
  }
};
