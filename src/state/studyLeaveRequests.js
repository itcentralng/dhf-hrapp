const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).user.access_token
  : null;

export const SubmitStudyLeave = async (formData, setLoading) => {
  setLoading(true);
  const applicantData = {
    applicant_name: formData.fullname,
    designation: formData.designation,
    years_served: formData.yearsServed,
    institute_of_study: formData.instituteOfStudy,
    course_of_study: formData.courseOfStudy,
    area_of_study: formData.areaOfStudy,
    duration_of_study: formData.durationOfStudy,
    purpose_of_study: formData.purpose,
    start_date: formData.startDate,
    end_date: formData.endDate,
    education_status: formData.educationStatus,
    year_obtained: formData.yearObtained,
    last_study_period: formData.lastStudyPeriod,
    pursue_indication: formData.pursureIndication,
    applicant_date: formData.date,
    applicant_signature: formData.applicantSign,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/messages/submit-study-leave`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(applicantData),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }

    console.log("Study leave sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};
