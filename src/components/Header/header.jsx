import "./header.css"
import backLoginImage from "../../imgs/header-logo.png";
import LogoutButton from "../Buttons/LogoutButton/logoutButton";

function header(props) {
    
    return (
        <div className="header-container">
            <div className="header-content">
                <img
                    src={backLoginImage}
                    alt="Logo da UPE Caruaru"
                    className="header-image"
                />
                <span className="header-title"><h1>{ props.title }</h1></span>
                <LogoutButton route={"/logout"} />
            </div>
            <hr className="header-line" />
        </div>
    )
}

export default header