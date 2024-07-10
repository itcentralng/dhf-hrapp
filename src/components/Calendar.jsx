import { useState } from "react";
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
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
function Calendar({ onDateRangeChange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formatDate = (date) => {
    return date ? dayjs(date).format("YYYY-MM-DD") : "";
  };

  const handleDateChange = (date) => {
    const adjustedDate = dayjs(date);
    if (!startDate) {
      setStartDate(adjustedDate);
      onDateRangeChange(formatDate(adjustedDate), null);
    } else if (startDate && adjustedDate.isAfter(startDate)) {
      setEndDate(adjustedDate);
      onDateRangeChange(formatDate(startDate), formatDate(adjustedDate));
    } else {
      setEndDate(null);
      setStartDate(adjustedDate);
      onDateRangeChange(formatDate(adjustedDate), null);
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
              value={formatDate(startDate)}
              placeholder="YYYY-MM-DD"
              inputProps={{ readOnly: true }}
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
              value={formatDate(endDate)}
              placeholder="YYYY-MM-DD"
              inputProps={{ readOnly: true }}
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
