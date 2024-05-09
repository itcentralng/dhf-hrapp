/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default Auth;
