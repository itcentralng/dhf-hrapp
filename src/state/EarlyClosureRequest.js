const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

const pathParts = location.pathname.split("/");
const pathId = parseInt(pathParts[pathParts.length - 1], 10);

export const SubmitEarlyClosure = async (formData, setLoading) => {
  setLoading(true);
  const staffInfo = {
    teacher: formData.earlyClosureData.teacher,
    clas: formData.earlyClosureData.class,
    section: formData.earlyClosureData.section,
    permission: formData.earlyClosureData.permission,
    period: formData.earlyClosureData.period,
    reason: formData.earlyClosureData.reason,
    teacher_date: formData.earlyClosureData.date,
    teacher_signature: formData.earlyClosureData.signature,
    recipient_hos: formData.recipients[0],
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/messages/submit-early-closure`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(staffInfo),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }
    alert("Early closure sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const HosSubmitEarlyClosure = async (formData, setLoading) => {
  setLoading(true);
  const hosInfo = {
    head_comment: formData.earlyClosureData.headsComment,
    head_date: formData.earlyClosureData.headsDate,
    appraiser_name: formData.earlyClosureData.headsSignature,
    appraiser_post: formData.earlyClosureData.appraiserName,
    head_signature: formData.earlyClosureData.post,
    recipient_hr: formData.recipients[0],
  };
  console.log(hosInfo);
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-early-closure/${pathId}/hos`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(hosInfo),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }
    alert("Early closure sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const HrsSubmitEarlyClosure = async (formData, setLoading) => {
  setLoading(true);
  const hosInfo = {
    hro_comment: formData.earlyClosureData.hroComment,
    hro_date: formData.earlyClosureData.hroDate,
    hro_signature: formData.earlyClosureData.hroSignature,
    recipient_director: formData.recipients[0],
  };
  console.log(hosInfo);
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-early-closure/${pathId}/hr`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(hosInfo),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }
    alert("Early closure sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const AdminSubmitEarlyClosure = async (formData, setLoading) => {
  setLoading(true);
  const adminInfo = {
    director_comment: formData.earlyClosureData.directorsComment,
    director_date: formData.earlyClosureData.directorsDate,
    director_signature: formData.earlyClosureData.directorsSignature,
    school_stamp: formData.earlyClosureData.schoolStamp,
  };
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-early-closure/${pathId}/director`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(adminInfo),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }
    alert("Early closure filled successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};
