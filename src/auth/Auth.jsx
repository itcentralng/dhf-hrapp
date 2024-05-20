/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const accessToken = useSelector((state) => state.user.token);

  if (!isAuth & !accessToken) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default Auth;
