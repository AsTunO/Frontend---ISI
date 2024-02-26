import "./userCard.css"
import userIconImage from "../../../imgs/user-icon.png"
import { useNavigate } from 'react-router-dom';
function userCard() {

    const navigate = useNavigate();

    const toProfilePage = () => {
    navigate('/profile');
    };

    return(
        <div className="card-container" onClick={toProfilePage}>
            <img
                src={userIconImage}
                alt="Icone do usuário"
                className="user-icon-image"
            />
            <span className="card-title">Usuário</span>
        </div>
    )
}

export default userCard