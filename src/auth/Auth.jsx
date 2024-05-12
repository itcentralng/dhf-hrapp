/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  // console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default Auth;
