import { useContext } from "react";
import { AdminContext } from "../Context_API/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const { isAuthenticated } = useContext(AdminContext); 

    return isAuthenticated ? children : <Navigate to="/login" state={{from:location}} replace />;
};

export default ProtectedRoute;
