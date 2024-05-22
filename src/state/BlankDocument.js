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
      const formDataToJson = (formData) => {
        const jsonObject = {};
        formData.forEach((value, key) => {
          jsonObject[key] = value;
        });
        return JSON.stringify(jsonObject, null, 2);
      };

      // Usage
      console.log(formDataToJson(formDataObj));
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
    const formDataToJson = (formData) => {
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });
      return JSON.stringify(jsonObject, null, 2);
    };

    // Usage
    console.log(formDataToJson(formDataObj));
  } catch (error) {
    console.error("There was an error uploading the document!", error);
    const formDataToJson = (formData) => {
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });
      return JSON.stringify(jsonObject, null, 2);
    };

    // Usage
    console.log(formDataToJson(formDataObj));
  } finally {
    setLoading(false);
  }
};
