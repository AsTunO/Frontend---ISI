import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
};