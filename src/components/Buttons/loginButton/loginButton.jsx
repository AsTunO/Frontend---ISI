import './loginButton.css'

function loginButton({ onClick }) {
    return( 
        <button className="login-button" onClick={onClick}>Entrar</button>
    );
}

export default loginButton