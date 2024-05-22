const accessToken = localStorage.getItem("userState")
  ? JSON.parse(localStorage.getItem("userState")).token
  : null;

export const SubmitEarlyClosure = async (formData, setLoading) => {
  console.log(formData);
  // setLoading(true);
  // const applicantData = {
  //   supervisor: formData.supervisorName,
  //   supervisor_post: formData.post,
  //   term: formData.term,
  //   session: formData.session,
  //   peer: formData.peerName,
  //   peer_post: formData.peerPost,
  //   remark: formData.,
  //   date: formData.,
  //   supervisor_signature: formData.super,
  //   school_admin_signature: formData.,
  //   head_teacher_signature: formData.,
  //   director_signature: formData.,
  //   grades: {
  //     completes_task_on_time: formData.,
  //     attends_school_meetings_till_closure: formData.,
  //     makes_positive_contributions: formData.,
  //     handles_responsibilities_appropriately: formData.,
  //     displays_technical_competence: formData.,
  //     very_creative: formData.,
  //     easy_to_work_with: formData.,
  //     works_well_under_pressure: formData.,
  //     communicates_well_in_written_form: formData.,
  //     communicates_well_when_speaking: formData.,
  //     assists_other_teams_when_needed: formData.,
  //     demonstrates_good_problem_solving_skills: formData.,
  //     listens_well: formData.,
  //     works_well_with_parents: formData.,
  //     coaches_class_assistant_well: formData.,
  //     coaches_weak_students_well: formData.,
  //     learns_quickly: formData.,
  //     works_well_on_own: formData.,
  //     reliable: formData.,
  //     produces_high_quality_output: formData.,
  //     handles_pupils_conflicts_well: formData.,
  //     handles_cases_of_puppils_discipline_well: formData.,
  //     accepts_and_perfects_corrections_well: formData.,
  //     well_organized: formData.,
  //     look_forward_to_working_again: formData.,
  //     punctual_to_school: formData.,
  //     regular_in_school: formData.,
  //     does_well_on_duty: formData.,
  //     class_namagement: formData.,
  //     shows_concern_to_school_environment: formData.,
  //     enforces_school_rules_always: formData.,
  //   },
  // };
  // try {
  //   const response = await fetch(
  //     `${import.meta.env.VITE_APP_API_URL}/messages/submit-study-leave`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       body: JSON.stringify(applicantData),
  //     }
  //   );

  //   if (!response.ok) {
  //     console.log(accessToken);
  //     alert("Failed to submit study leave! Please try again.");
  //     throw new Error("Failed to submit study leave");
  //   }

  //   console.log("Study leave sent successfully");
  // } catch (error) {
  //   console.error("Error sending study leave: ", error.message);
  // } finally {
  //   setLoading(false);
  // }
};
