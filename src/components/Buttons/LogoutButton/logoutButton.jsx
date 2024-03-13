/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function LogoutButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.route);
    }
    
    return (
            <button className="header-logout" onClick={handleClick}>
                <h2>Deslogar</h2>
            </button>
    );
}