import { Navigate } from "react-router-dom";
import { useAuthContext } from "../store/auth-context";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
