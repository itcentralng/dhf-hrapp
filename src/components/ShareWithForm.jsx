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
  SubmitStudyLeave,
  HosRespondStudyLeave,
  AdminRespondStudyLeave,
  HrRespondStudyLeave,
} from "../state/studyLeaveRequests";
import { SubmitBlankDocument } from "../state/BlankDocument";
import { useShareForm } from "./context/ShareFormContext";
import { PerformEvaluation } from "../state/EvaluationTemplateRequest";
import {
  AdminSubmitEarlyClosure,
  HosSubmitEarlyClosure,
  HrsSubmitEarlyClosure,
  SubmitEarlyClosure,
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
        await SubmitStudyLeave(sendStudyLeaveData, setLoading);
      } else if (user.role === "hos") {
        await HosRespondStudyLeave(sendStudyLeaveData, setLoading);
      } else if (user.role === "admin") {
        await AdminRespondStudyLeave(sendStudyLeaveData, setLoading);
      } else if (user.role === "hr") {
        await HrRespondStudyLeave(sendStudyLeaveData, setLoading);
      } else {
        alert("Role does not exist");
      }
    } else if (documentType === "Evaluation Form") {
      await PerformEvaluation(sendEvaluationData, setLoading);
    } else if (documentType === "Early Closure") {
      if (user.role === "staff") {
        await SubmitEarlyClosure(sendEarlyClosure, setLoading);
      } else if (user.role === "hos") {
        await HosSubmitEarlyClosure(sendEarlyClosure, setLoading);
      } else if (user.role === "hr") {
        await HrsSubmitEarlyClosure(sendEarlyClosure, setLoading);
      } else if (user.role === "admin") {
        await AdminSubmitEarlyClosure(sendEarlyClosure, setLoading);
      } else {
        alert("Role does not exist");
      }
    } else {
      await SubmitBlankDocument(sendFormData, setLoading);
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
