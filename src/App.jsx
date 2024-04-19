import { Box } from "@mui/material";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Inbox from "./pages/inbox/Inbox";
import Sent from "./pages/sent/Sent";
import Users from "./pages/users/Users";
import Reports from "./pages/reports/Reports";

const routes = [
  {
    path: "/",
    element: <Inbox />,
  },
  {
    path: "/sent",
    element: <Sent />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
];

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Box>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {routes.map((route) => (
              <Route path="/" element={<Layout />} key={route.path}>
                <Route path={route.path} element={route.element} />
              </Route>
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
