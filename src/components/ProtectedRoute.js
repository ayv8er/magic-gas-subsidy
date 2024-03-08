import { Navigate } from "react-router-dom";
import { useAuthContext } from "../AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthContext();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
