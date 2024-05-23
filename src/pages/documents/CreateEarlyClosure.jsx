/* eslint-disable react/no-unescaped-entities */
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
import { Overlay } from "../../styled-components/styledBox";
import ShareWithForm from "../../components/ShareWithForm";
import DocDetailsAndButton from "./DocDetailsAndButton";
import { useShareForm } from "../../components/context/ShareFormContext";

const P = styled("p")({
  marginTop: "auto",
});

const CustomInput = styled(TextField)({
  padding: "5px 5px 0px 10px",
});
const CreateEarlyClosure = () => {
  const user = useSelector((state) => state.user.user);
  const [documentTitle, setDocumentTitle] = useState("Early Closure");
  const { displayShareForm } = useShareForm();

  const [formData, setFormData] = useState({
    teacher: "",
    class: "",
    section: "",
    permission: "",
    period: "",
    reason: "",
    date: "",
    signature: "",
    headsComment: "",
    headsDate: "",
    headsSignature: "",
    appraiserName: "",
    post: "",
    hroComment: "",
    hroDate: "",
    hroSignature: "",
    directorsComment: "",
    directorsDate: "",
    directorsSignature: "",
    schoolStamp: "",
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
            <Stack direction="row" justifyContent={"center"}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                EARLY CLOSURE/MOVEMENT/LATE ARRIVAL
              </Typography>
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
            <Stack direction="row">
              <P mt={"auto"} sx={{ fontWeight: "bold" }}>
                Director's comment:
              </P>
              <CustomInput
                disabled={user.role != "admin"}
                variant="standard"
                name="directorsComment"
                value={formData.directorsComment}
                onChange={handleChange}
                sx={{ width: "80%" }}
              />
            </Stack>

            <Stack direction="row">
              <P mt={"auto"}>Date:</P>
              <CustomInput
                disabled={user.role != "admin"}
                variant="standard"
                name="directorsDate"
                value={formData.directorsDate}
                onChange={handleChange}
              />
              <P mt={"auto"}>Signature:</P>
              <CustomInput
                disabled={user.role != "admin"}
                variant="standard"
                name="directorsSignature"
                value={formData.directorsSignature}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row">
              <P mt={"auto"} sx={{ fontWeight: "bold" }}>
                School stamp:
              </P>
              <CustomInput
                disabled={user.role != "admin"}
                variant="standard"
                name="schoolStamp"
                value={formData.schoolStamp}
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

export default CreateEarlyClosure;
