import React, { useState } from "react";
import {
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (startDate && date > startDate) {
      setEndDate(date);
    } else {
      setEndDate(null);
      setStartDate(date);
    }
  };

  return (
    <FormControl
      component="form"
      sx={{
        "& .MuiOutlinedInput-notchedOutline": {
          border: "#DAD9D7 1px solid",
          borderRadius: "0px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
        "& .MuiInputBase-input": {
          height: "10px",
          width: "205px",
          textAlign: "center",
          fontFamily: "DM sans",
          fontSize: "13px",
        },
      }}
    >
      <Paper elevation={4}>
        <Stack
          direction="column"
          gap={"13px"}
          sx={{ py: "20px", height: "390px" }}
        >
          <Stack direction="row" gap={1} sx={{ pl: "25px" }}>
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: "14px",
                fontWeight: 500,
                my: "auto",
              }}
            >
              From
            </Typography>
            <TextField
              value={startDate ? startDate.toISOString().slice(0, 10) : ""}
              placeholder="Day / Month / Year"
            />
          </Stack>
          <Stack direction="row" gap={3} sx={{ pl: "25px" }}>
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: "14px",
                fontWeight: 500,
                my: "auto",
              }}
            >
              To
            </Typography>
            <TextField
              value={endDate ? endDate.toISOString().slice(0, 10) : ""}
              InputProps={{}}
              placeholder="Day / Month / Year"
            />
          </Stack>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={startDate}
              onChange={handleDateChange}
              sx={{}}
            />
          </LocalizationProvider>
        </Stack>
      </Paper>
    </FormControl>
  );
}

export default Calendar;
