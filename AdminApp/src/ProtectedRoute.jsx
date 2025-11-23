import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const hasToken = document.cookie.includes("adminToken=");

  if (!hasToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
