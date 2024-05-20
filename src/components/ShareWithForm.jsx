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
import { useShareForm } from "./context/ShareFormContext";
import MutipleSelect from "./MultipleSelect";
import { SubmitStudyLeave } from "../state/studyLeaveRequests";
import React from "react";
const Text = styled(Typography)({
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: "14px",
  color: "black",
  margin: "10px 0px 10px 0px",
});

const ShareWithForm = ({ documentType, formData }) => {
  const { setDisplayShareForm } = useShareForm();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    if (documentType === "Study Leave") {
      await SubmitStudyLeave(formData, setLoading);
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
        <MutipleSelect />
        <Text>Additional info</Text>
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          multiline
          minRows={6}
          placeholder="Type something..."
        />
        <FilledButton
          sx={{ width: "36%", mx: "auto", mt: "30px", fontFamily: "DM sans" }}
          onClick={handleSubmit}
          disabled={loading}
          type="submit"
        >
          {loading ? <CircularProgress size={22} /> : "Send Messsage"}
        </FilledButton>
      </FormControl>
    </Box>
  );
};

export default ShareWithForm;
