import "./userCard.css"
import userIconImage from "../../../imgs/user-icon.png"

function userCard() {
    return(
        <div className="card-container">
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