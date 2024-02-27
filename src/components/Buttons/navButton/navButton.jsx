/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navButton.css";

function NavButton(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        navigate(props.route);
        setIsClicked(true);
    }

    useEffect(() => {
        if (location.pathname == props.route) {
            setIsClicked(true);
        }
    }, [location.pathname, props.route]);

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
