import { Box, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { FilledShadowButton } from "../styled-components/styledButtons";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationPopup from "./ConfirmationPopup";

const CommentsArea = () => {
  const [addCommentClicked, setAddCommentClicked] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowSuccessPopUp(false), 2000);
    return () => clearInterval(interval);
  }, [showSuccessPopUp]);

  const handleChange = (event) => {
    setCommentData(event.target.value);
  };
  const handleCommentReply = (event) => {
    event.preventDefault();
    try {
      if (commentData == "") {
        throw new Error("Please type a reply.");
      }
      setShowSuccessPopUp(true);
    } catch (err) {
      alert(err);
    }
    setCommentData("");
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
              placeholder="Your Leave request has been approved"
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
        >
          <TurnLeftIcon
            sx={{ width: "35px", height: "25px", ml: "-30px", mb: "3px" }}
          />
          Reply
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
        <ConfirmationPopup text={"Your message has been sent successfully."} />
      )}
    </>
  );
};

export default CommentsArea;
