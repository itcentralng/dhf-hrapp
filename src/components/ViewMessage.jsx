import React, { useEffect, useState } from "react";
import {
  ArrowBack,
  InboxOutlined,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreVert,
  Person,
} from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmailLabel from "./EmailLabel";
import DownloadDocumentArea from "./DownloadDocumentArea";
import CommentsArea from "./CommentsArea";
import ConfirmationPopup from "./ConfirmationPopup";
import { Overlay } from "../styled-components/styledBox";
import { useGetInboxQuery } from "../state/api";

const ViewMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);

  const user = useSelector((state) => state.user.user);
  const { data: mailInfo, isLoading, error } = useGetInboxQuery();

  useEffect(() => {
    if (mailInfo && Array.isArray(mailInfo)) {
      const pathParts = location.pathname.split("/");
      const pathId = parseInt(pathParts[pathParts.length - 1], 10);

      const message = mailInfo.find((item) => item.message_id === pathId);
      console.log(currentMessage);
      setCurrentMessage(message);
    }
  }, [location.pathname, mailInfo]);

  useEffect(() => {
    let interval = setInterval(() => {
      setShowDeletePopup(false);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNextMessage = (id) => {
    const currentIndex = mailInfo.findIndex((item) => item.message_id === id);

    if (currentIndex === -1) {
      alert("Page does not exist");
      return;
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < mailInfo.length) {
      const nextMessage = mailInfo[nextIndex];
      navigate(`/message/${nextMessage.message_id}`);
    } else {
      alert("No more messages available");
    }
  };

  const handlePrevMessage = (id) => {
    const currentIndex = mailInfo.findIndex((item) => item.message_id === id);

    if (currentIndex === -1) {
      alert("Page does not exist");
      return;
    }

    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      const prevMessage = mailInfo[prevIndex];
      navigate(`/message/${prevMessage.message_id}`);
    } else {
      alert("No previous messages available");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading messages.</div>;
  }

  if (!currentMessage) {
    return null; // or a loading spinner/message
  }

  return (
    <>
      <Box sx={{ minHeight: "75vh" }}>
        <Box key={currentMessage.message_id}>
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
                <InboxOutlined sx={{ fontSize: "1.3rem", color: "#4D90F0" }} />
              </IconButton>
              <IconButton>
                <MoreVert sx={{ fontSize: "1.3rem", color: "#4D90F0" }} />
              </IconButton>
              <IconButton
                onClick={() => handlePrevMessage(currentMessage.message_id)}
              >
                <KeyboardArrowLeft
                  sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                />
              </IconButton>
              <IconButton
                onClick={() => handleNextMessage(currentMessage.message_id)}
              >
                <KeyboardArrowRight
                  sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
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
                      {currentMessage.type === "sent"
                        ? `${user.first_name} ${user.last_name}`
                        : currentMessage.sender}
                    </Typography>
                    <EmailLabel emailType={currentMessage.label} />
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
              {currentMessage.text}
            </Typography>
          </Box>
        </Box>
        <Stack
          direction="column"
          gap="32px"
          sx={{ padding: "55px 75px", width: "70%" }}
        >
          <DownloadDocumentArea
            file={currentMessage?.document}
            sender={currentMessage?.sender}
          />
          {currentMessage?.comments.map((comment) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                padding: "2em",
                borderRadius: "12px",
                border: "#CCCCCC 0.5px solid",
                bgcolor: "white",
              }}
              key={comment.comments_id}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: "1rem", width: "75%" }}
              >
                {comment.text}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: ".8rem",
                  color: "#2586F8",
                  fontFamily: "DM Sans",
                  width: "23%",
                  textAlign: "right",
                }}
              >
                From {comment.sender}
              </Typography>
            </Box>
          ))}
          <CommentsArea comments={currentMessage?.comments} />
        </Stack>
      </Box>
      {showDeletePopup && (
        <Overlay>
          <ConfirmationPopup text={"Message has successfully been deleted."} />
        </Overlay>
      )}
    </>
  );
};

export default ViewMessage;
