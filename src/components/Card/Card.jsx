import "./card.css";

function adminCard(props) {
    return(
        <div className="card-container">
            <img
                src={ props.icon }
                alt={ props.alt }
                className="icon-image"
            />
            <span className="card-title">{ props.title }</span>
        </div>
    )
}

export default adminCard