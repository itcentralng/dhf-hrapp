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
import Auth from "./auth/Auth";
import CreateDocument from "./pages/documents/CreateDocument";
import BlankDocument from "./pages/documents/BlankDocument";
import { ShareFormProvider } from "./components/context/ShareFormContext";
import EvaluationTemplate from "./components/EvaluationTemplate";
import EarlyClosureTemplate from "./components/EarlyClosureTemplate";
import StudyLeave from "./pages/documents/StudyLeave";

const routes = [
  {
    path: "*",
    element: <p>Page not found</p>,
  },
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
    path: "/sent/messages/:id",
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
    path: "/createdocument/*",
    element: <p>Template does not exist yet</p>,
  },
  {
    path: "/createdocument/blankdocument",
    element: <BlankDocument />,
  },
  {
    path: "/createdocument/evaluationtemplate",
    element: <EvaluationTemplate />,
  },
  {
    path: "/createdocument/earlyclosuretemplate",
    element: <EarlyClosureTemplate />,
  },
  {
    path: "/createdocument/studyleave",
    element: <StudyLeave />,
  },
];

function App() {
  return (
    <Box>
      <BrowserRouter>
        <UserListProvider>
          <ShareFormProvider>
            <Box>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                {routes.map((route) => (
                  <Route
                    path="/"
                    element={
                      <Auth>
                        <Layout />
                      </Auth>
                    }
                    key={route.path}
                  >
                    <Route
                      path={route.path}
                      element={<Auth>{route.element}</Auth>}
                    />
                  </Route>
                ))}
              </Routes>
            </Box>
          </ShareFormProvider>
        </UserListProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
