/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./card.css";

function Card(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.route);
    }

    return(
        <div className="card-container" onClick={handleClick}>
            <img
                src={ props.icon }
                alt={ props.alt }
                className="icon-image"
            />
            <span className="card-title">{ props.title }</span>
        </div>
    )
}

export default Card;