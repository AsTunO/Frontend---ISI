/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navButton.css";

function NavButton(props) {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        navigate(props.route);
        setIsClicked(true);
    }

    return (
        <div className={`btn ${(isClicked == true ? "clicked" : "")}`}>
            <button className="nav-btn" onClick={handleClick}>
                <img src={ props.icon } alt={ props.alt } />
                <h2>{ props.title }</h2>
            </button>
        </div>
    );
}

export default NavButton;