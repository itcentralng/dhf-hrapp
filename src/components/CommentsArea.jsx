import { Paper, TextField, Typography } from "@mui/material";
import React from "react";

const CommentsArea = () => {
  return (
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
        />
      </Paper>
    </div>
  );
};

export default CommentsArea;
