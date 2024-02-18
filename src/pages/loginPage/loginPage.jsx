import CPFInput from '../../components/Inputs/cpfInput/cpfInput.jsx'
import PasswordInput from '../../components/Inputs/passwordInput/passwordInput.jsx'
import LoginButton from '../../components/Buttons/loginButton/loginButton.jsx'
import './loginPage.css'

function loginPage() {
  return (
    <div className="login-page">
      <CPFInput />
      <PasswordInput />
      <LoginButton />
    </div>
  )
}

export default loginPage