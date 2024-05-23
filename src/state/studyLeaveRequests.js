const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

export const SubmitStudyLeave = async (formData, setLoading) => {
  // setLoading(true);
  const applicantData = {
    applicant_name: formData.studyLeaveData.fullname,
    designation: formData.studyLeaveData.designation,
    years_served: formData.studyLeaveData.yearsServed,
    institute_of_study: formData.studyLeaveData.instituteOfStudy,
    course_of_study: formData.studyLeaveData.courseOfStudy,
    area_of_study: formData.studyLeaveData.areaOfStudy,
    duration_of_study: formData.studyLeaveData.durationOfStudy,
    purpose_of_study: formData.studyLeaveData.purpose,
    start_date: formData.studyLeaveData.startDate,
    end_date: formData.studyLeaveData.endDate,
    education_status: formData.studyLeaveData.educationStatus,
    year_obtained: formData.studyLeaveData.yearObtained,
    last_study_period: formData.studyLeaveData.lastStudyPeriod,
    pursue_indication: formData.studyLeaveData.pursureIndication,
    applicant_date: formData.studyLeaveData.date,
    applicant_signature: formData.studyLeaveData.applicantSign,
  };
  console.log(applicantData);
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

export const HosRespondStudyLeave = async (formData, setLoading) => {
  setLoading(true);
  const hosData = {
    study_relevance: formData.relevance,
    applicant_job_desc: formData.applicantJobDesc,
    duties_to_cover: formData.dutiesToCover,
    remark: formData.remarks,
    head_name: formData.headTeacherName,
    head_post: formData.headPost,
    head_date: formData.headDate,
    head_signature: formData.headSign,
  };
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/respond-study-leave/{study_leave_id}/hos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(hosData),
      }
    );

    if (!response.ok) {
      console.log(accessToken);
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
