/* eslint-disable react/prop-types */
import {
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import DocDetailsAndButton from "../pages/documents/DocDetailsAndButton";
import { Overlay } from "../styled-components/styledBox";
import ShareWithForm from "./ShareWithForm";
import { useShareForm } from "./context/ShareFormContext";

const P = styled("p")({
  marginTop: "auto",
});

const CustomInput = styled(TextField)({
  padding: "5px 5px 0px 10px",
});
const EarlyClosureTemplate = ({ currentMessage }) => {
  const user = useSelector((state) => state.user.user);
  const [documentTitle, setDocumentTitle] = useState("Early Closure");
  const { displayShareForm } = useShareForm();

  const [formData, setFormData] = useState({
    time: "",
    teacher:
      currentMessage?.teacher === "no response"
        ? ""
        : currentMessage?.teacher || "",
    class:
      currentMessage?.clas === "no response" ? "" : currentMessage?.clas || "",
    section:
      currentMessage?.section === "no response"
        ? ""
        : currentMessage?.section || "",
    permission:
      currentMessage?.permission === "no response"
        ? ""
        : currentMessage?.permission || "",
    period:
      currentMessage?.period === "no response"
        ? ""
        : currentMessage?.period || "",
    reason:
      currentMessage?.reason === "no response"
        ? ""
        : currentMessage?.reason || "",
    date:
      currentMessage?.teacher_date === "no response"
        ? ""
        : currentMessage?.teacher_date || "",
    signature:
      currentMessage?.teacher_signature === "no response"
        ? ""
        : currentMessage?.teacher_signature || "",
    headsComment:
      currentMessage?.head_comment === "no response"
        ? ""
        : currentMessage?.head_comment || "",
    headsDate:
      currentMessage?.head_date === "no response"
        ? ""
        : currentMessage?.head_date || "",
    headsSignature:
      currentMessage?.head_signature === "no response"
        ? ""
        : currentMessage?.head_signature || "",
    appraiserName:
      currentMessage?.appraiser_name === "no response"
        ? ""
        : currentMessage?.appraiser_name || "",
    post:
      currentMessage?.appraiser_post === "no response"
        ? ""
        : currentMessage?.appraiser_post || "",
    hroComment:
      currentMessage?.hro_comment === "no response"
        ? ""
        : currentMessage?.hro_comment || "",
    hroDate:
      currentMessage?.hro_date === "no response"
        ? ""
        : currentMessage?.hro_date || "",
    hroSignature:
      currentMessage?.hro_signature === "no response"
        ? ""
        : currentMessage?.hro_signature || "",
    directorsComment:
      currentMessage?.director_comment === "no response"
        ? ""
        : currentMessage?.director_comment || "",
    directorsDate:
      currentMessage?.director_date === "no response"
        ? ""
        : currentMessage?.director_date || "",
    directorsSignature:
      currentMessage?.director_signature === "no response"
        ? ""
        : currentMessage?.director_signature || "",
    schoolStamp:
      currentMessage?.school_stamp === "no response"
        ? ""
        : currentMessage?.school_stamp || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <DocDetailsAndButton
        documentTitle={documentTitle}
        setDocumentTitle={setDocumentTitle}
      />
      <Container sx={{ my: "20px" }}>
        <Paper elevation={2}>
          <Stack gap={2} sx={{ padding: "50px" }}>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                EARLY CLOSURE/MOVEMENT/LATE ARRIVAL
              </Typography>
              <Stack direction="row">
                <P style={{ marginTop: "auto" }}>Time:</P>
                <CustomInput
                  disabled={user.role != "staff"}
                  variant="standard"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </Stack>
            </Stack>

            <Stack direction="row">
              <P mt={"auto"} sx={{ width: "21%" }}>
                Teacher/Subject Teacher:
              </P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="teacher"
                value={formData.teacher}
                onChange={handleChange}
                sx={{ width: "30%" }}
              />
              <P mt={"auto"}>Class:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="class"
                value={formData.class}
                onChange={handleChange}
                sx={{ width: "30%" }}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"}>Section:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="section"
                value={formData.section}
                onChange={handleChange}
              />
              <P mt={"auto"}>Seek Permission for:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="permission"
                value={formData.permission}
                onChange={handleChange}
                sx={{ width: "50%" }}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"}>For the period of:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="period"
                value={formData.period}
                onChange={handleChange}
                sx={{ width: "20%" }}
              />
              <P mt={"auto"}>Reason:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                sx={{ width: "55%" }}
              />
            </Stack>

            <Stack direction="row">
              <P mt={"auto"}>Date:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <P mt={"auto"}>Signature:</P>
              <CustomInput
                disabled={user.role != "staff"}
                variant="standard"
                name="signature"
                value={formData.signature}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"} sx={{ fontWeight: "bold" }}>
                Head's comment:
              </P>
              <CustomInput
                disabled={user.role != "hos"}
                variant="standard"
                name="headsComment"
                value={formData.headsComment}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </Stack>

            <Stack direction="row">
              <P mt={"auto"}>Date:</P>
              <CustomInput
                disabled={user.role != "hos"}
                variant="standard"
                name="headsDate"
                value={formData.headsDate}
                onChange={handleChange}
              />
              <P mt={"auto"}>Signature:</P>
              <CustomInput
                disabled={user.role != "hos"}
                variant="standard"
                name="headsSignature"
                value={formData.headsSignature}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"}>Name of Appraiser:</P>
              <CustomInput
                disabled={user.role != "hos"}
                variant="standard"
                name="appraiserName"
                value={formData.appraiserName}
                onChange={handleChange}
                sx={{ width: "30%" }}
              />
              <P mt={"auto"}>Post:</P>
              <CustomInput
                disabled={user.role != "hos"}
                variant="standard"
                name="post"
                value={formData.post}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"} sx={{ fontWeight: "bold" }}>
                HRO's comment:
              </P>
              <CustomInput
                disabled={user.role != "hr"}
                variant="standard"
                name="hroComment"
                value={formData.hroComment}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </Stack>

            <Stack direction="row">
              <P mt={"auto"}>Date:</P>
              <CustomInput
                disabled={user.role != "hr"}
                variant="standard"
                name="hroDate"
                value={formData.hroDate}
                onChange={handleChange}
              />
              <P mt={"auto"}>Signature:</P>
              <CustomInput
                disabled={user.role != "hr"}
                variant="standard"
                name="hroSignature"
                value={formData.hroSignature}
                onChange={handleChange}
              />
            </Stack>
          </Stack>
        </Paper>
      </Container>
      {displayShareForm && (
        <Overlay>
          <ShareWithForm documentType={documentTitle} formData={formData} />
        </Overlay>
      )}
    </>
  );
};

export default EarlyClosureTemplate;
