/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Radio,
  TextField,
  Container,
  Paper,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import evaluationFormDetails from "../data/evaluationFormData";
import DocDetailsAndButton from "../pages/documents/DocDetailsAndButton";
import { Overlay } from "../styled-components/styledBox";
import ShareWithForm from "./ShareWithForm";
import { useShareForm } from "./context/ShareFormContext";

// Custom styled TableCell with border and padding
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #ddd",
  padding: theme.spacing(1),
}));

// Custom styled TextField for comments
const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%", // Full width
}));

const CustomTextField = styled(TextField)({
  padding: "10px 10px 0px 10px",
});

const initialState = {
  supervisorName: "",
  post: "",
  date: "",
  term: "",
  session: "",
  peerName: "",
  peerPost: "",
  supervisorComment: "",
  schoolAdminComment: "",
  headTeacherComment: "",
  directorComment: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const EvaluationTemplate = ({ currentMessage }) => {
  const [selectedRating, setSelectedRating] = useState({});
  const [documentTitle, setDocumentTitle] = useState("Evaluation Form");
  const [formData, dispatch] = useReducer(reducer, initialState);
  const { displayShareForm } = useShareForm();
  const handleRatingChange = (event, description, rating) => {
    console.log(selectedRating);
    setSelectedRating((prevSelected) => ({
      ...prevSelected,
      [description]: rating,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  return (
    <>
      <DocDetailsAndButton
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
      />
      <Container sx={{ my: "20px" }}>
        <Paper elevation={2} sx={{ pb: "20px" }}>
          <Table>
            <TableRow>
              <StyledTableCell colSpan={2}>
                <Typography variant="h4" align="center">
                  STAFF EVALUATION/APPRAISAL FROM
                </Typography>
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>
                <Stack direction="row">
                  <Typography sx={{ width: "210px", mt: "auto" }}>
                    Supervisor's Name:
                  </Typography>
                  <CustomTextField
                    fullWidth
                    variant="standard"
                    name="supervisorName"
                    value={formData.supervisorName}
                    onChange={handleInputChange}
                  />
                </Stack>

                <Stack direction="row">
                  <Typography sx={{ mt: "auto" }}>Post:</Typography>
                  <CustomTextField
                    fullWidth
                    variant="standard"
                    name="post"
                    value={formData.post}
                    onChange={handleInputChange}
                  />
                </Stack>
              </StyledTableCell>
              <StyledTableCell>
                <Stack direction="row">
                  <Typography sx={{ mt: "auto" }}>Date:</Typography>
                  <CustomTextField
                    fullWidth
                    variant="standard"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </Stack>
                <Stack direction="row">
                  <Typography sx={{ mt: "auto" }}>Term:</Typography>
                  <CustomTextField
                    fullWidth
                    variant="standard"
                    name="term"
                    value={formData.term}
                    onChange={handleInputChange}
                  />
                  <Typography sx={{ mt: "auto" }}>Session:</Typography>
                  <CustomTextField
                    fullWidth
                    variant="standard"
                    name="session"
                    value={formData.session}
                    onChange={handleInputChange}
                  />
                </Stack>
              </StyledTableCell>
            </TableRow>
            {/* Row 3 */}
            <TableRow>
              <StyledTableCell colSpan={2}>
                <Typography>
                  Rating Key: 1 = very poor 2 = poor 3 = average 4 = above
                  average 5 = outstanding N/A = Not Applicable
                </Typography>
              </StyledTableCell>
            </TableRow>
            {/* Row 4 */}
            <TableRow>
              <StyledTableCell colSpan={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="row">
                    <Typography sx={{ mt: "auto" }}>
                      Peer being evaluated:
                    </Typography>
                    <CustomTextField
                      variant="standard"
                      name="peerName"
                      value={formData.peerName}
                      onChange={handleInputChange}
                    />
                  </Stack>
                  <Stack direction="row">
                    <Typography sx={{ mt: "auto" }}>post:</Typography>
                    <CustomTextField
                      variant="standard"
                      name="peerPost"
                      value={formData.peerPost}
                      onChange={handleInputChange}
                    />
                  </Stack>
                </Stack>
              </StyledTableCell>
            </TableRow>
          </Table>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell align="center">5</StyledTableCell>
                <StyledTableCell align="center">4</StyledTableCell>
                <StyledTableCell align="center">3</StyledTableCell>
                <StyledTableCell align="center">2</StyledTableCell>
                <StyledTableCell align="center">1</StyledTableCell>
                <StyledTableCell align="center">N/A</StyledTableCell>
                <StyledTableCell sx={{ width: "40%" }}>
                  Comments
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {evaluationFormDetails.map((item) => (
                <TableRow key={item.id}>
                  <StyledTableCell>{item.id}</StyledTableCell>
                  <StyledTableCell>{item.description}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "5"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "5")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "4"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "4")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "3"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "3")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "2"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "2")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "1"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "1")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Radio
                      checked={selectedRating[item.id] === "na"}
                      onChange={(e) =>
                        handleRatingChange(e, item.description, "na")
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledTextField
                      variant="outlined"
                      onChange={handleInputChange}
                      size="small"
                      defaultValue={item.comments}
                      InputProps={{ disableUnderline: true }}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                        },
                      }}
                    />
                  </StyledTableCell>
                </TableRow>
              ))}
              <TableRow>
                <StyledTableCell colSpan={9}>
                  <Stack direction="row">
                    <Typography>Remarks:</Typography>
                    <CustomTextField
                      variant="outlined"
                      onChange={handleInputChange}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                        },
                      }}
                    />
                  </Stack>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid container spacing={2} padding="10px" sx={{ pr: "30px" }}>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                variant="standard"
                name="supervisorComment"
                value={formData.supervisorComment}
                onChange={handleInputChange}
              />
              <Typography sx={{ color: "black", ml: "10px" }}>
                Supervisor's Signature/date
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                variant="standard"
                name="schoolAdminComment"
                value={formData.schoolAdminComment}
                onChange={handleInputChange}
              />
              <Typography sx={{ color: "black", ml: "10px" }}>
                School Admin's Signature/date
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                variant="standard"
                name="headTeacherComment"
                value={formData.headTeacherComment}
                onChange={handleInputChange}
              />
              <Typography sx={{ color: "black", ml: "10px" }}>
                Head Teacher's Signature/date
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                fullWidth
                variant="standard"
                name="directorComment"
                value={formData.directorComment}
                onChange={handleInputChange}
              />
              <Typography sx={{ color: "black", ml: "10px" }}>
                Director's Signature/date
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm
            documentType={documentTitle}
            formData={formData}
            selectedRating={selectedRating}
          />
        </Overlay>
      )}
    </>
  );
};

export default EvaluationTemplate;
