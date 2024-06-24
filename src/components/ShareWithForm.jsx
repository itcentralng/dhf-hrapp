/* eslint-disable react/prop-types */
import React, { useState } from "react";
import UserSelect from "./MultipleSelect";
import {
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { HeadingText, SubHeadingText } from "../styled-components/StyledText";
import { FilledButton } from "../styled-components/styledButtons";
import CloseIcon from "@mui/icons-material/Close";
import {
  useSubmitLeaveMutation,
  useHosStudyResponseMutation,
  useAdminStudyResponseMutation,
  useHrStudyResponseMutation,
} from "../state/studyLeaveRequests";
import { useSubmitMessageMutation } from "../state/BlankDocument";
import { useShareForm } from "./context/ShareFormContext";
import { PerformEvaluation } from "../state/EvaluationTemplateRequest";
import {
  useAdminEarlyResponseMutation,
  useHosEarlyResponseMutation,
  useHrEarlyResponseMutation,
  useSubmitClosureMutation,
} from "../state/EarlyClosureRequest";
import { useSelector } from "react-redux";

const Text = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
  margin: "10px 0px 10px 0px",
});

const ShareWithForm = ({
  documentType,
  formData,
  documentFile,
  selectedRating,
}) => {
  const { setDisplayShareForm } = useShareForm();
  const [loading, setLoading] = React.useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [additionalInfo, setAdditionalInfo] = React.useState("");
  const user = useSelector((state) => state.user.user);
  const pathParts = location.pathname.split("/");
  const pathId = parseInt(pathParts[pathParts.length - 1], 10);
  const [shareStudyLeave] = useSubmitLeaveMutation();
  const [hosStudyResponse] = useHosStudyResponseMutation();
  const [addminStudyResponse] = useAdminStudyResponseMutation();
  const [hrStudyResponse] = useHrStudyResponseMutation();
  const [shareEarlyClosure] = useSubmitClosureMutation();
  const [hosEarlyResponse] = useHosEarlyResponseMutation();
  const [hrEarlyResponse] = useHrEarlyResponseMutation();
  const [adminEarlyResponse] = useAdminEarlyResponseMutation();
  const [blankDocumentMessage] = useSubmitMessageMutation();

  const handleSubmit = async () => {
    const sendFormData = {
      text: formData,
      document: documentFile,
      title: documentType,
      recipients: selectedUsers.map((user) => user.email), // Extract emails from selected users
      label: additionalInfo, // Replace with actual text if needed
    };

    const sendEvaluationData = {
      recipients: selectedUsers.map((user) => user.email),
      title: documentType,
      evaluationItems: formData,
      label: additionalInfo,
      ratings: selectedRating,
    };

    const sendStudyLeaveData = {
      recipients: selectedUsers.map((user) => user.email),
      title: documentType,
      studyLeaveData: formData,
      label: additionalInfo,
    };

    const sendEarlyClosure = {
      recipients: selectedUsers.map((user) => user.email),
      title: documentType,
      earlyClosureData: formData,
      label: additionalInfo,
    };

    if (documentType === "Study Leave") {
      if (user.role === "staff") {
        // await SubmitStudyLeave(sendStudyLeaveData, setLoading);
        const applicantData = {
          applicant_name: sendStudyLeaveData.studyLeaveData.fullname,
          designation: sendStudyLeaveData.studyLeaveData.designation,
          years_served: sendStudyLeaveData.studyLeaveData.yearsServed,
          institute_of_study:
            sendStudyLeaveData.studyLeaveData.instituteOfStudy,
          course_of_study: sendStudyLeaveData.studyLeaveData.courseOfStudy,
          area_of_study: sendStudyLeaveData.studyLeaveData.areaOfStudy,
          duration_of_study: sendStudyLeaveData.studyLeaveData.durationOfStudy,
          purpose_of_study: sendStudyLeaveData.studyLeaveData.purpose,
          start_date: sendStudyLeaveData.studyLeaveData.startDate,
          end_date: sendStudyLeaveData.studyLeaveData.endDate,
          education_status: sendStudyLeaveData.studyLeaveData.educationStatus,
          year_obtained: sendStudyLeaveData.studyLeaveData.yearObtained,
          last_study_period: sendStudyLeaveData.studyLeaveData.lastStudyPeriod,
          pursue_indication:
            sendStudyLeaveData.studyLeaveData.pursureIndication,
          applicant_date: sendStudyLeaveData.studyLeaveData.date,
          applicant_signature: sendStudyLeaveData.studyLeaveData.applicantSign,
          recipient_hos: sendStudyLeaveData.recipients[0],
        };
        try {
          setLoading(true);
          await shareStudyLeave(applicantData).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "hos") {
        // await HosRespondStudyLeave(sendStudyLeaveData, setLoading);
        const hosData = {
          study_relevance: sendStudyLeaveData.studyLeaveData.relevance,
          applicant_job_desc:
            sendStudyLeaveData.studyLeaveData.applicantJobDesc,
          duties_to_cover: sendStudyLeaveData.studyLeaveData.dutiesToCover,
          remark: sendStudyLeaveData.studyLeaveData.remarks,
          head_name: sendStudyLeaveData.studyLeaveData.headTeacherName,
          head_post: sendStudyLeaveData.studyLeaveData.headPost,
          head_date: sendStudyLeaveData.studyLeaveData.headDate,
          head_signature: sendStudyLeaveData.studyLeaveData.headSign,
          recipient_hr: sendStudyLeaveData.recipients[0],
        };
        try {
          setLoading(true);
          await hosStudyResponse({ values: hosData, pathId }).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          // console.log(pathId);
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "admin") {
        const accountantData = {
          salary_cost: sendStudyLeaveData.studyLeaveData.relevance,
          accountant_name: sendStudyLeaveData.studyLeaveData.applicantJobDesc,
          accountant_post: sendStudyLeaveData.studyLeaveData.dutiesToCover,
          account_date: sendStudyLeaveData.studyLeaveData.remarks,
          accountant_signature:
            sendStudyLeaveData.studyLeaveData.headTeacherName,
        };
        // await AdminRespondStudyLeave(sendStudyLeaveData, setLoading);
        try {
          setLoading(true);
          await addminStudyResponse({
            values: accountantData,
            pathId,
          }).unwrap();
          alert("Form filled successfully");
        } catch (error) {
          // console.log(pathId);
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "hr") {
        const hrData = {
          approval_grant: sendStudyLeaveData.studyLeaveData.approvalGrant,
          grant_with_pay: sendStudyLeaveData.studyLeaveData.grantWithPay,
          granted_program: sendStudyLeaveData.studyLeaveData.grantedProgram,
          years_after_resumption:
            sendStudyLeaveData.studyLeaveData.yearsAfterResumption,
          certificate_upgrade:
            sendStudyLeaveData.studyLeaveData.certificateUpgrade,
          beneficiary_number:
            sendStudyLeaveData.studyLeaveData.beneficiaryNumber,
          applicant_not_supported:
            sendStudyLeaveData.studyLeaveData.applicantNotSupported,
          hr_name: sendStudyLeaveData.studyLeaveData.hrName,
          hr_post: sendStudyLeaveData.studyLeaveData.hrPost,
          hr_date: sendStudyLeaveData.studyLeaveData.hrDate,
          hr_signature: sendStudyLeaveData.studyLeaveData.hrSign,
          recipient_accountant: sendStudyLeaveData.recipients[0],
          recipient_director: sendStudyLeaveData.recipients[1],
        };
        try {
          setLoading(true);
          await hrStudyResponse({
            values: hrData,
            pathId,
          }).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.log(hrData);
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        alert("Role does not exist");
      }
    } else if (documentType === "Evaluation Form") {
      await PerformEvaluation(sendEvaluationData, setLoading);
    } else if (documentType === "Early Closure") {
      if (user.role === "staff") {
        // await SubmitEarlyClosure(sendEarlyClosure, setLoading);
        const staffInfo = {
          teacher: sendEarlyClosure.earlyClosureData.teacher,
          clas: sendEarlyClosure.earlyClosureData.class,
          section: sendEarlyClosure.earlyClosureData.section,
          permission: sendEarlyClosure.earlyClosureData.permission,
          period: sendEarlyClosure.earlyClosureData.period,
          reason: sendEarlyClosure.earlyClosureData.reason,
          teacher_date: sendEarlyClosure.earlyClosureData.date,
          teacher_signature: sendEarlyClosure.earlyClosureData.signature,
          recipient_hos: sendEarlyClosure.recipients[0],
        };
        try {
          setLoading(true);
          await shareEarlyClosure(staffInfo).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "hos") {
        const hosInfo = {
          head_comment: sendEarlyClosure.earlyClosureData.headsComment,
          head_date: sendEarlyClosure.earlyClosureData.headsDate,
          appraiser_name: sendEarlyClosure.earlyClosureData.headsSignature,
          appraiser_post: sendEarlyClosure.earlyClosureData.appraiserName,
          head_signature: sendEarlyClosure.earlyClosureData.post,
          recipient_hr: sendEarlyClosure.recipients[0],
        };
        try {
          setLoading(true);
          await hosEarlyResponse({ values: hosInfo, pathId }).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "hr") {
        const hrInfo = {
          hro_comment: sendEarlyClosure.earlyClosureData.hroComment,
          hro_date: sendEarlyClosure.earlyClosureData.hroDate,
          hro_signature: sendEarlyClosure.earlyClosureData.hroSignature,
          recipient_director: sendEarlyClosure.recipients[0],
        };
        try {
          setLoading(true);
          await hrEarlyResponse({ values: hrInfo, pathId }).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else if (user.role === "admin") {
        const adminInfo = {
          director_comment: sendEarlyClosure.earlyClosureData.directorsComment,
          director_date: sendEarlyClosure.earlyClosureData.directorsDate,
          director_signature:
            sendEarlyClosure.earlyClosureData.directorsSignature,
          school_stamp: sendEarlyClosure.earlyClosureData.schoolStamp,
        };
        try {
          setLoading(true);
          await adminEarlyResponse({ values: adminInfo, pathId }).unwrap();
          alert("Message sent successfully");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        alert("Role does not exist");
      }
    } else {
      // await SubmitBlankDocument(sendFormData, setLoading);
      const formDataObj = new FormData();
      formDataObj.append("text", sendFormData.text);
      formDataObj.append("title", sendFormData.title);
      formDataObj.append("recipients", sendFormData.recipients.join(","));
      formDataObj.append("label", sendFormData.title);
      formDataObj.append("document", sendFormData.document);
      try {
        setLoading(true);
        await blankDocumentMessage(formDataObj).unwrap();
        alert("Message sent successfully");
      } catch (error) {
        // console.log(sendFormData.title);
        formDataObj.forEach((value, key) => {
          console.log(key, value);
        });
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "512px",
        height: "430px",
        padding: "33px 43px",
        display: "flex",
        flexDirection: "column",
        ml: "-250px",
        mt: "100px",
      }}
    >
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <HeadingText>{`Share '${documentType}'`}</HeadingText>
        <IconButton
          onClick={() => setDisplayShareForm(false)}
          sx={{ mt: "-15px" }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>

      <SubHeadingText>
        Please fill out the form below to share report to the selected person.
      </SubHeadingText>
      <FormControl
        // component="form"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CDD0D5",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          borderRadius: "8px",
          mt: "10px",
        }}
      >
        <Text>Share</Text>
        <UserSelect onUserSelect={setSelectedUsers} />
        <Text>Additional info</Text>
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          multiline
          minRows={6}
          placeholder="Type something..."
          value={additionalInfo}
          onChange={(event) => {
            setAdditionalInfo(event.target.value);
          }}
        />
        <FilledButton
          sx={{ width: "36%", mx: "auto", mt: "30px", fontFamily: "DM sans" }}
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          {loading ? <CircularProgress size={22} /> : "Send Message"}
        </FilledButton>
      </FormControl>
    </Box>
  );
};

export default ShareWithForm;
