import "./adminCard.css";
import adminIconImage from "../../../imgs/admin-icon.png";

function adminCard() {
    return(
        <div className="card-container">
            <img
                src={adminIconImage}
                alt="Icone de administrador"
                className="admin-icon-image"
            />
            <span className="card-title">Administrador</span>
        </div>
    )
}

export default adminCard