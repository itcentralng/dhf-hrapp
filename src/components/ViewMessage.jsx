import {
  ArrowBack,
  DeleteOutline,
  InboxOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Person,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom/dist";
import mailInfo from "../data/mailInfo";
import EmailLabel from "./EmailLabel";
import DownloadDocumentArea from "./DownloadDocumentArea";
import CommentsArea from "./CommentsArea";
import pdf from "../assets/Background.pdf";

const ViewMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname;
  const pathParts = pathName.split("/");
  const pathId = parseInt(pathParts[pathParts.length - 1]);

  const newArray = [...mailInfo];
  const deleteMessage = (type, id) => {
    const array = newArray.filter((item) => item.id !== id);
    mailInfo.splice(0, mailInfo.length, ...array);
    handleNextMessage(type, id);
  };

  const handleNextMessage = (type, id) => {
    const currentIndex = newArray
      .filter((item) => item.type === type)
      .findIndex((item) => item.id === id);

    if (currentIndex === -1) {
      alert("Page does not exist");
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex >= 0 && nextIndex < newArray.length) {
      const nextMessage = newArray[nextIndex];
      navigate(`/${type}/message/${nextMessage.id}`);
    } else {
      alert("No more messages available");
    }
  };

  const handlePrevMessage = (type, id) => {
    const currentIndex = newArray
      .filter((item) => item.type === type)
      .findIndex((item) => item.id === id);

    if (currentIndex === -1) {
      alert("Page does not exist");
      return;
    }

    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0 && prevIndex < newArray.length) {
      const prevMessage = newArray[prevIndex];
      navigate(`/${type}/message/${prevMessage.id}`);
    } else {
      alert("No previous messages available");
    }
  };

  return (
    <Box sx={{ minHeight: "75vh" }}>
      {newArray
        .filter((item) => item.id === pathId)
        .map((item) => (
          <Box key={item.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #EDEFF1",
                padding: ".5em 0",
              }}
            >
              <IconButton onClick={() => navigate(-1)}>
                <ArrowBack />
              </IconButton>
              <Box>
                <IconButton>
                  <InboxOutlined
                    sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                  />
                </IconButton>
                <IconButton onClick={() => deleteMessage(item.type, item.id)}>
                  <DeleteOutline
                    sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                  />
                </IconButton>
                <IconButton>
                  <MoreVert sx={{ fontSize: "1.3rem", color: "#4D90F0" }} />
                </IconButton>
                <IconButton>
                  <KeyboardArrowLeft
                    sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                    onClick={() => handlePrevMessage(item.type, item.id)}
                  />
                </IconButton>
                <IconButton>
                  <KeyboardArrowRight
                    sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                    onClick={() => handleNextMessage(item.type, item.id)}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "1em",
                padding: "0 .8em",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#0000000D",
                  width: "3em",
                  height: "3em",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Person sx={{ color: "#00000029" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.3rem",
                          fontFamily: "DM Sans",
                          fontWeight: 500,
                        }}
                      >
                        {item.sender}
                      </Typography>
                      <EmailLabel emailType={item.label} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "DM Sans",
                        fontSize: ".8rem",
                        color: "#0000008A",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {location.pathname.includes("inbox")
                        ? "to me"
                        : "to Admin Office"}{" "}
                      <KeyboardArrowRight sx={{ fontSize: ".7rem" }} />
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: ".9rem",
                      letterSpacing: "0.75%",
                      color: "#00000099",
                      fontFamily: "DM Sans",
                    }}
                  >
                    Tue, May 12, 9:14 AM (8 days ago)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ marginLeft: "4em", padding: "0 .7em", marginTop: "1.5em" }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "1rem",
                  lineHeight: "28.8px",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
      <Stack
        direction="column"
        gap="32px"
        sx={{ padding: "55px 75px", width: "70%" }}
      >
        <DownloadDocumentArea file={pdf} />
        <CommentsArea />
      </Stack>
    </Box>
  );
};

export default ViewMessage;
