/* eslint-disable react/prop-types */
import './standartButton.css'

function StandartButton({ onClick, name }) {
    return( 
        <button className="button" onClick={onClick}>{name}</button>
    );
}

export default StandartButton;