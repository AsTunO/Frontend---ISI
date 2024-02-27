import "./header.css"
import backLoginImage from "../../imgs/header-logo.png";

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
            </div>
            <hr className="header-line" />
        </div>
    )
}

export default header