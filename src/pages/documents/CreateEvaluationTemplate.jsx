/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Container,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import evaluationFormDetails from "../../data/evaluationFormData";
import DocDetailsAndButton from "./DocDetailsAndButton";
import { Overlay } from "../../styled-components/styledBox";
import ShareWithForm from "../../components/ShareWithForm";
import { useShareForm } from "../../components/context/ShareFormContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #ddd",
  padding: theme.spacing(1),
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
  remark: "",
  grades: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "UPDATE_GRADE":
      return {
        ...state,
        grades: {
          ...state.grades,
          [action.gradeKey]: action.value,
        },
      };
    default:
      return state;
  }
};
const CreateEvaluationTemplate = () => {
  const [documentTitle, setDocumentTitle] = useState("Evaluation Form");
  const [formData, dispatch] = useReducer(reducer, initialState);
  const { displayShareForm } = useShareForm();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleGradeChange = (e, gradeKey) => {
    const { value } = e.target;
    dispatch({ type: "UPDATE_GRADE", gradeKey, value });
  };

  const getFormattedData = () => {
    const gradeKeys = {
      1: "completes_task_on_time",
      2: "attends_school_meetings_till_closure",
      3: "makes_positive_contributions",
      4: "handles_responsibilities_appropriately",
      5: "displays_technical_competence",
      6: "very_creative",
      7: "easy_to_work_with",
      8: "works_well_under_pressure",
      9: "communicates_well_in_written_form",
      10: "communicates_well_when_speaking",
      11: "assists_other_teams_when_needed",
      12: "demonstrates_good_problem_solving_skills",
      13: "listens_well",
      14: "works_well_with_parents",
      15: "coaches_class_assistant_well",
      16: "coaches_weak_students_well",
      17: "learns_quickly",
      18: "works_well_on_own",
      19: "reliable",
      20: "produces_high_quality_output",
      21: "handles_pupils_conflicts_well",
      22: "handles_cases_of_puppils_discipline_well",
      23: "accepts_and_perfects_corrections_well",
      24: "well_organized",
      25: "look_forward_to_working_again",
      26: "punctual_to_school",
      27: "regular_in_school",
      28: "does_well_on_duty",
      29: "class_namagement",
      30: "shows_concern_to_school_environment",
      31: "enforces_school_rules_always",
    };

    const formattedGrades = Object.entries(formData.grades).reduce(
      (acc, [key, value]) => {
        const formattedKey = gradeKeys[key] || key;
        acc[formattedKey] = value;
        return acc;
      },
      {}
    );

    return {
      supervisor: formData.supervisorName,
      supervisor_post: formData.post,
      term: formData.term,
      session: formData.session,
      peer: formData.peerName,
      peer_post: formData.peerPost,
      remark: formData.remark,
      date: formData.date,
      supervisor_signature: formData.supervisorComment,
      school_admin_signature: formData.schoolAdminComment,
      head_teacher_signature: formData.headTeacherComment,
      director_signature: formData.directorComment,
      grades: formattedGrades,
    };
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
                    type="date"
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
                <StyledTableCell align="center">
                  Score between 0 to 5. 0 = N/A
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {evaluationFormDetails.map((item) => (
                <TableRow key={item.id}>
                  <StyledTableCell>{item.id}</StyledTableCell>
                  <StyledTableCell>{item.description}</StyledTableCell>
                  <StyledTableCell>
                    <CustomTextField
                      fullWidth
                      variant="standard"
                      type="number"
                      // min={0}
                      // max={5}
                      name={`grade-${item.id}`}
                      value={formData.grades[item.id] || ""}
                      onChange={(e) => handleGradeChange(e, item.id)}
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
                      // variant="standard"
                      name="remark"
                      value={formData.remark}
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
        </Paper>
      </Container>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm
            documentType={documentTitle}
            formData={getFormattedData()}
            // selectedRating={selectedRating}
          />
        </Overlay>
      )}
    </>
  );
};

export default CreateEvaluationTemplate;
