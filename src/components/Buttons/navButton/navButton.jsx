/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./navButton.css";

function NavButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.route);
    }

    return (
        <div className="btn">
            <button className="nav-btn" onClick={handleClick}>
                <img src={ props.icon } alt={ props.alt } />
                <h2>{ props.title }</h2>
            </button>
        </div>
    );
}

export default NavButton;