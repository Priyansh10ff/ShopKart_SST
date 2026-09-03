import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { customer, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (customer) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default PublicRoute;
