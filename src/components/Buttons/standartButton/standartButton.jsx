/* eslint-disable react/prop-types */
import './standartButton.css'

function StandartButton({ onClick, name, type }) {
    return( 
        <button type={type} className="button" onClick={onClick}>{name}</button>
    );
}

export default StandartButton;