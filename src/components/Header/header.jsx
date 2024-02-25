import "./header.css"
import backLoginImage from "../../imgs/header-logo.png";

function header() {
    return (
        <div className="header-container">
            <img
                src={backLoginImage}
                alt="Logo da UPE Caruaru"
                className="header-image"
            />
            <hr className="header-line" />
        </div>
    )
}

export default header