const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

const pathParts = location.pathname.split("/");
const pathId = parseInt(pathParts[pathParts.length - 1], 10);

export const SubmitStudyLeave = async (formData, setLoading) => {
  setLoading(true);
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
    recipient_hos: formData.recipients[0],
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

    alert("Study leave sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const HosRespondStudyLeave = async (formData, setLoading) => {
  setLoading(true);
  const hosData = {
    study_relevance: formData.studyLeaveData.relevance,
    applicant_job_desc: formData.studyLeaveData.applicantJobDesc,
    duties_to_cover: formData.studyLeaveData.dutiesToCover,
    remark: formData.studyLeaveData.remarks,
    head_name: formData.studyLeaveData.headTeacherName,
    head_post: formData.studyLeaveData.headPost,
    head_date: formData.studyLeaveData.headDate,
    head_signature: formData.studyLeaveData.headSign,
    recipient_hr: formData.recipients[0],
  };
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-study-leave/${pathId}/hos`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(hosData),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }

    alert("Study leave sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const AdminRespondStudyLeave = async (formData, setLoading) => {
  setLoading(true);
  const accountantData = {
    salary_cost: formData.studyLeaveData.relevance,
    accountant_name: formData.studyLeaveData.applicantJobDesc,
    accountant_post: formData.studyLeaveData.dutiesToCover,
    account_date: formData.studyLeaveData.remarks,
    accountant_signature: formData.studyLeaveData.headTeacherName,
  };
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-study-leave/${pathId}/accountant`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(accountantData),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }

    alert("Study leave sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
};

export const HrRespondStudyLeave = async (formData, setLoading) => {
  setLoading(true);
  const hrData = {
    approval_grant: formData.studyLeaveData.approvalGrant,
    grant_with_pay: formData.studyLeaveData.grantWithPay,
    granted_program: formData.studyLeaveData.grantedProgram,
    years_after_resumption: formData.studyLeaveData.yearsAfterResumption,
    certificate_upgrade: formData.studyLeaveData.certificateUpgrade,
    beneficiary_number: formData.studyLeaveData.beneficiaryNumber,
    applicant_not_supported: formData.studyLeaveData.applicantNotSupported,
    hr_name: formData.studyLeaveData.hrName,
    hr_post: formData.studyLeaveData.hrPost,
    hr_date: formData.studyLeaveData.hrDate,
    hr_signature: formData.studyLeaveData.hrSign,
    recipient_accountant: formData.recipients[0],
    recipient_director: formData.recipients[0],
  };
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_APP_API_URL
      }/messages/respond-study-leave/${pathId}/hr`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(hrData),
      }
    );

    if (!response.ok) {
      alert("Failed to submit study leave! Please try again.");
      throw new Error("Failed to submit study leave");
    }

    alert("Study leave sent successfully");
  } catch (error) {
    console.error("Error sending study leave: ", error.message);
  } finally {
    setLoading(false);
  }
  console.log(formData);
};
