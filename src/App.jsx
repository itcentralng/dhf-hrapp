import { Box } from "@mui/material";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Inbox from "./pages/inbox/Inbox";
import Sent from "./pages/sent/Sent";
import Users from "./pages/users/Users";
import Reports from "./pages/reports/Reports";
import ViewMessage from "./components/ViewMessage";
import { UserListProvider } from "./components/UserListContext";
import CreateDocument from "./pages/documents/CreateDocument";
import BlankDocument from "./pages/documents/BlankDocument";
import Auth from "./auth/Auth";
const routes = [
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/inbox/message/:id",
    element: <ViewMessage />,
  },
  {
    path: "/sent",
    element: <Sent />,
  },
  {
    path: "/sent/message/:id",
    element: <ViewMessage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/createdocument",
    element: <CreateDocument />,
  },
  {
    path: "/createdocument/blankdocument",
    element: <BlankDocument />,
  },
];

function App() {
  return (
    <Box>
      <BrowserRouter>
        <UserListProvider>
          <Box>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              {routes.map((route) => (
                <Route path="/" element={<Layout />} key={route.path}>
                  <Route
                    path={route.path}
                    element={<Auth>{route.element}</Auth>}
                  />
                </Route>
              ))}
            </Routes>
          </Box>
        </UserListProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
