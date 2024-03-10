import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Logout() {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken();
        navigate("/", { replace: true });
    };

    handleLogout();

    return <div></div>;
}