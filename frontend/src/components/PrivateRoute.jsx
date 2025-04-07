import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, allowedRole }) => {
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    // User not logged in
    return <Navigate to="/login" />;
  }

  if (allowedRole && user.role !== allowedRole) {
    // User is logged in but doesn't have the correct role
    return <Navigate to="/" />;
  }

  // User is allowed
  return children;
};

export default PrivateRoute;
