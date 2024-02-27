import { useNavigate } from 'react-router-dom';
import CPFInput from '../../components/Inputs/cpfInput/cpfInput.jsx';
import PasswordInput from '../../components/Inputs/passwordInput/passwordInput.jsx';
import LoginButton from '../../components/Buttons/loginButton/loginButton.jsx';
import './loginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // console.log("opaaa")
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <CPFInput />
        <PasswordInput />
        <LoginButton onClick={handleLogin} />
      </div>
    </div>
  );
}

export default LoginPage;
