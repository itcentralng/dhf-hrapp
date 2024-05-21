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
import { SubmitStudyLeave } from "../state/studyLeaveRequests";
import { SubmitBlankDocument } from "../state/BlankDocument";
import { useShareForm } from "./context/ShareFormContext";

const Text = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
  margin: "10px 0px 10px 0px",
});

const ShareWithForm = ({ documentType, formData, documentFile }) => {
  const { setDisplayShareForm } = useShareForm();
  const [loading, setLoading] = React.useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [additionalInfo, setAdditionalInfo] = React.useState("");

  const handleSubmit = async () => {
    const sendFormData = {
      text: formData,
      document: documentFile,
      title: documentType,
      recipients: selectedUsers.map((user) => user.email), // Extract emails from selected users
      label: additionalInfo, // Replace with actual text if needed
    };

    if (documentType === "Study Leave") {
      await SubmitStudyLeave(sendFormData, setLoading);
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
