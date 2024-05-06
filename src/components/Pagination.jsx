import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const Pagination = ({
  totalItems,
  currentPage,
  totalPages,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
}) => {
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: "#E1E2E9 1px solid",
      }}
    >
      {" "}
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <FormControl
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(94, 99, 102, 0.08)",
              width: "40px",
              height: "25px",
              mt: "17px",
              borderRadius: "8px",
              bgcolor: "rgba(94, 99, 102, 0.08)",
            },
          }}
        >
          <Stack direction="row">
            <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={23}>23</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              {/* Add more options as needed */}
            </Select>
            <Typography
              sx={{
                fontFamily: "inter",
                fontWeight: 400,
                fontSize: "14px",
                color: "#A6A8B1",
                my: "auto",
                ml: 1,
                mr: 3,
              }}
            >
              items per page
            </Typography>
          </Stack>
        </FormControl>
        <Typography
          sx={{
            fontFamily: "inter",
            fontWeight: 400,
            fontSize: "14px",
            color: "#1E1E1E",
            display: "inline",
          }}
        >{`${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
          currentPage * itemsPerPage,
          totalItems
        )} of ${totalItems} items`}</Typography>
      </Stack>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        {totalPages > 1 && (
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <FormControl
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(94, 99, 102, 0.08)",
                  width: "40px",
                  height: "25px",
                  mt: "17px",
                  borderRadius: "8px",
                  bgcolor: "rgba(94, 99, 102, 0.08)",
                },
              }}
            >
              <Select value={currentPage} onChange={handlePageChange}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>{`${
                    index + 1
                  }`}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography
              sx={{
                fontFamily: "inter",
                fontWeight: 400,
                fontSize: "14px",
                color: "#1E1E1E",
                display: "inline",
                pl: 1,
              }}
            >{`of ${totalPages} pages`}</Typography>
            <IconButton
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <NavigateBeforeIcon />
            </IconButton>
            <IconButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <NavigateNextIcon />
            </IconButton>
          </Stack>
        )}
      </Stack>
    </div>
  );
};

export default Pagination;
