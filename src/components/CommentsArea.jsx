import { CircularProgress, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { FilledShadowButton } from "../styled-components/styledButtons";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationPopup from "./ConfirmationPopup";
import { useLocation } from "react-router-dom";
import { useAddCommentMutation, invalidateTags } from "../state/api";
import { useDispatch } from "react-redux";

// const accessToken = localStorage.getItem("userState")
//   ? JSON.parse(localStorage.getItem("userState")).token
//   : null;

const CommentsArea = () => {
  const [addCommentClicked, setAddCommentClicked] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const url = location.pathname;
  const parts = url.split("/");
  const messageType = parts[2];

  useEffect(() => {
    const interval = setInterval(() => setShowSuccessPopUp(false), 2000);
    return () => clearInterval(interval);
  }, [showSuccessPopUp]);

  const handleChange = (event) => {
    setCommentData(event.target.value);
  };
  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleCommentReply = async (event) => {
    event.preventDefault();
    setLoading(true);
    const url = location.pathname;
    const parts = url.split("/");
    const messageId = parts[parts.length - 1];
    const intMessageId = messageId;

    try {
      if (commentData == "") {
        throw new Error("Please type a reply.");
      }
      const commentItems = {
        text: commentData,
        message_id: intMessageId,
        type: messageType.includes("message")
          ? "message"
          : messageType.includes("study")
          ? "study leave"
          : messageType.includes("early")
          ? "early closure"
          : "evaluation",
      };

      const response = await addComment(commentItems).unwrap();
      if (!response.message) {
        console.log(response);
      }
      setShowSuccessPopUp(true);
      setCommentData("");
      dispatch(invalidateTags(["Comments", "Inbox", "Outbox"]));
    } catch (error) {
      console.error("Error: ", error);
      alert("Failed to send comment! Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {addCommentClicked && (
        <div
          style={{
            height: "300px",
            backgroundColor: "white",
            border: "#EDEFF1 1px solid",
            borderRadius: "6px",
            padding: "30px",
          }}
        >
          <Typography
            sx={{
              color: "#121212",
              fontSize: "18px",
              fontWeight: 500,
              fontFamily: "DM sans",
              mb: "16px",
            }}
          >
            Comment(s)
          </Typography>
          <Paper elevation={4} sx={{ borderRadius: "8px" }}>
            <TextField
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#EDEFF1",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
                borderRadius: "8px",
              }}
              id="outlined-multiline-flexible"
              fullWidth
              multiline
              minRows={9}
              placeholder="Type in your comment"
              onChange={handleChange}
              value={commentData}
            />
          </Paper>
        </div>
      )}
      <Stack direction="row" gap={2} mt={"32px"}>
        <FilledShadowButton
          onClick={handleCommentReply}
          sx={{
            width: "187px",
            height: "56px",
            fontWeight: 500,
            fontSize: "16px",
          }}
          disabled={loading}
        >
          <TurnLeftIcon
            sx={{ width: "35px", height: "25px", ml: "-30px", mb: "3px" }}
          />
          {loading ? <CircularProgress size={22} /> : "Reply"}
        </FilledShadowButton>
        {!addCommentClicked && (
          <FilledShadowButton
            onClick={() => setAddCommentClicked(true)}
            sx={{
              width: "187px",
              height: "56px",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            <AddIcon
              sx={{ width: "35px", height: "25px", ml: "-30px", mb: "3px" }}
            />
            Add Comment
          </FilledShadowButton>
        )}
      </Stack>
      {showSuccessPopUp && (
        <ConfirmationPopup text={"Your comment has been sent successfully."} />
      )}
    </>
  );
};

export default CommentsArea;
