import { Box, IconButton } from "@mui/material";
import { StyledTextField } from "../styled-components/styledInputs";
import SearchIcon from "@mui/icons-material/Search";

const CustomSearchBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledTextField
        placeholder="Search…"
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          border: "1px solid #E7EAE9",
        }}
      />
      <IconButton
        sx={{
          color: "#000",
          position: "absolute",
          left: { xs: "82%", sm: "87%", md: "94%", lg: "96%" },
          borderRadius: "4px",
        }}
        disableRipple
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default CustomSearchBox;
