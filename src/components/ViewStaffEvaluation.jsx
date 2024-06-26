import React, { useEffect, useState } from "react";
import { IconButton, Box, Typography, Modal } from "@mui/material";
import { ArrowBack, Person } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DownloadDocumentArea from "./DownloadDocumentArea";
import CommentsArea from "./CommentsArea";
import ConfirmationPopup from "./ConfirmationPopup";
import { Overlay } from "../styled-components/styledBox";
import { useGetInboxQuery, useGetOutboxQuery } from "../state/api";
import EmailLabel from "./EmailLabel";
import EvaluationTemplate from "./EvaluationTemplate";

const ViewEvaluations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [openTemplate, setOpenTemplate] = React.useState(false);

  const handleTemplateOpen = () => setOpenTemplate(true);
  const handleTemplateClose = () => setOpenTemplate(false);

  const user = useSelector((state) => state.user.user);
  const {
    data: inboxData,
    isLoading: inboxLoading,
    error: inboxError,
  } = useGetInboxQuery();
  const {
    data: outboxData,
    isLoading: outboxLoading,
    error: outboxError,
  } = useGetOutboxQuery();

  const pathParts = location.pathname.split("/");
  const pathId = parseInt(pathParts[pathParts.length - 1], 10);
  const isInbox = location.pathname.includes("/inbox");

  useEffect(() => {
    const fetchMessage = () => {
      if (isInbox && inboxData && inboxData.evaluations) {
        const message = inboxData.evaluations.find(
          (item) => item.id === pathId
        );
        setCurrentMessage(message);
      } else if (!isInbox && outboxData && outboxData.evaluations) {
        const message = outboxData.evaluations.find(
          (item) => item.id === pathId
        );
        setCurrentMessage(message);
      }
    };
    fetchMessage();
  }, [location.pathname, inboxData, outboxData, isInbox, pathId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDeletePopup(false);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // const handleNextMessage = () => {
  //   const data = isInbox ? inboxData : outboxData;
  //   const messages = data ? data.evaluations : [];
  //   const currentIndex = messages.findIndex((item) => item.id === pathId);

  //   if (currentIndex === -1) {
  //     alert("Page does not exist");
  //     return;
  //   }

  //   const nextIndex = currentIndex + 1;
  //   if (nextIndex < messages.length) {
  //     const nextMessage = messages[nextIndex];
  //     navigate(`/evaluations/${nextMessage.id}`);
  //   } else {
  //     alert("No more messages available");
  //   }
  // };

  // const handlePrevMessage = () => {
  //   const data = isInbox ? inboxData : outboxData;
  //   const messages = data ? data.evaluations : [];
  //   const currentIndex = messages.findIndex((item) => item.id === pathId);

  //   if (currentIndex === -1) {
  //     alert("Page does not exist");
  //     return;
  //   }

  //   const prevIndex = currentIndex - 1;
  //   if (prevIndex >= 0) {
  //     const prevMessage = messages[prevIndex];
  //     navigate(`/evaluations/${prevMessage.id}`);
  //   } else {
  //     alert("No previous messages available");
  //   }
  // };

  if (inboxLoading || outboxLoading) {
    return <div>Loading...</div>;
  }

  if (inboxError || outboxError) {
    return <div>Error loading messages.</div>;
  }

  if (!currentMessage) {
    return null; // or a loading spinner/message
  }

  const creationDate = currentMessage.updated_at;
  const date = new Date(creationDate);

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  const formattedDate = date.toLocaleDateString("en-US", dateOptions);
  const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
  const finalFormattedDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <>
      <Box sx={{ minHeight: "75vh" }}>
        <Box key={currentMessage.id}>
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
            {/* <Box>
              <IconButton>
                <InboxOutlined sx={{ fontSize: "1.3rem", color: "#4D90F0" }} />
              </IconButton>
              <IconButton>
                <MoreVert sx={{ fontSize: "1.3rem", color: "#4D90F0" }} />
              </IconButton>
              <IconButton onClick={() => handlePrevMessage(currentMessage.id)}>
                <KeyboardArrowLeft
                  sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                />
              </IconButton>
              <IconButton onClick={() => handleNextMessage(currentMessage.id)}>
                <KeyboardArrowRight
                  sx={{ fontSize: "1.3rem", color: "#4D90F0" }}
                />
              </IconButton>
            </Box> */}
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
                      : currentMessage.applicant_name}
                  </Typography>
                  <EmailLabel emailType="Staff Evaluation" />
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
                  {isInbox ? "to me >" : `to next office >`}{" "}
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
                {finalFormattedDateTime}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "4em", padding: "0 .7em", marginTop: "1.5em" }}>
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
        <Box
          sx={{
            padding: "55px 75px",
            width: "70%",
          }}
        >
          <Box>
            <DownloadDocumentArea
              sender={currentMessage.applicant_name} // Use applicant name as sender
              handleTemplateOpen={handleTemplateOpen}
              messageType="evaluations" // Set messageType to "evaluations"
            />
          </Box>

          {currentMessage.comments.map((comment) => (
            <Box
              key={comment.comments_id}
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                padding: "2em",
                borderRadius: "12px",
                border: "#CCCCCC 0.5px solid",
                bgcolor: "white",
                margin: "2em 0",
              }}
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
          <CommentsArea comments={currentMessage.comments} />
        </Box>
      </Box>
      {showDeletePopup && (
        <Overlay>
          <ConfirmationPopup text={"Message has successfully been deleted."} />
        </Overlay>
      )}
      <Modal
        open={openTemplate}
        onClose={handleTemplateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "scroll",
          height: "100%",
          position: "absolute",
        }}
      >
        <Box sx={{ height: "100%", width: "80%" }}>
          <EvaluationTemplate
            sx={{ mt: "100px" }}
            currentMessage={currentMessage}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ViewEvaluations;
