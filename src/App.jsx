import { Box, TextField } from "@mui/material";
import { FilledButton } from "./styled-components/styledButtons";
import LoginForm from "./components/LoginForm";
import CopyrightFooter from "./components/copyrightFooter";

function App() {
  return (
    <Box>
      <LoginForm />
      <CopyrightFooter />
      {/* <h1>Hello</h1>
      <FilledButton>button</FilledButton>
      <TextField type="text" id="text" label="text" name="email" /> */}
    </Box>
  );
}

export default App;
