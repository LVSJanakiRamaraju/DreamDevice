import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token"); // Check for token
  return isAuthenticated ? children : <Navigate to="/login" />;
}