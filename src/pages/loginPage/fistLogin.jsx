/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Header from "../../components/Header/header.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import CPFInput from "../../components/Inputs/cpfInput/cpfInput.jsx";
import GenericInput from "../../components/Inputs/GenericInput/genericInput.jsx";
import EmailInput from "../../components/Inputs/EmailInput/emailInput.jsx";
import StandartButton from "../../components/Buttons/standartButton/standartButton.jsx";
import PasswordInput from '../../components/Inputs/passwordInput/passwordInput.jsx';
import "./fistLogin.css";

function FistLogin() {
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    const navigate = useNavigate();

  
    function handlePasswordChange(event) {
        setPasswordInput(event.target.value);
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPasswordInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        // TODO: além da validação pelo frontend, necessário validar junto a api
        if (passwordInput === "" || confirmPasswordInput === "") {
            toast.error("Todos os campos com * devem ser preenchidos!");
        } else if (passwordInput === 'upe.c@ru@ru' || confirmPasswordInput === 'upe.c@ru@ru') {
            toast.error("As senhas devem ser diferentes de 'upe.c@ru@ru'");
        } else if (passwordInput.length < 8 || confirmPasswordInput.length < 8) {
            toast.error("As senhas devem ter pelo menos 8 caracteres");
        } else if (!/\d/.test(passwordInput) || !/[a-zA-Z]/.test(passwordInput) ||
                   !/\d/.test(confirmPasswordInput) || !/[a-zA-Z]/.test(confirmPasswordInput)) {
            toast.error("A senha deve conter pelo menos um caractere numérico e um caractere alfanumérico");
        } else if (passwordInput !== confirmPasswordInput) {
            toast.error("As senhas devem coincidir");
        } else {
            toast.success("Usuário criado com sucesso!");
            navigate("/home");
        }
    }
    

    return(
        <div>
            <Header title={"Redefinir senha"} />
            <div className="change">
                <form action={handleSubmit} className="change-form">
                <h2>As senha padrão é upe.c@ru@ru</h2>
                
                <PasswordInput placeholder={"Nova senha"} name={"cpf"} onChange={handlePasswordChange}/>
                <PasswordInput placeholder={"Confirmar senha"} name={"cpf"} onChange={handleConfirmPasswordChange}/>
                
                <span> Sua nova senha deve ter 8 ou mais caracteres. entre letras e números.</span>
                <span className="last-text"> Após trocar a senha, você terá acesso ao sistema.</span>

                <StandartButton name={"Criar"} onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
}

export default FistLogin;