/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Header from "../../components/Header/header.jsx";
import StandartButton from "../../components/Buttons/standartButton/standartButton.jsx";
import PasswordInput from '../../components/Inputs/passwordInput/passwordInput.jsx';
import { useAuth } from '../../Context/AuthContext.jsx';
import api from "../../Api.js";

import "./firstLogin.css";

function FirstLoginPage() {
    const { email } = useAuth();

    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

    const [username, setUsername] = useState('');
    const [photo, setPhoto] = useState(null);

    const navigate = useNavigate();

  
    function handlePasswordChange(event) {
        setPasswordInput(event.target.value);
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPasswordInput(event.target.value);
    }

    function changePassword() {
        const request = {
            username: username,
            email: email,
            photo: photo,
            senha: passwordInput
        }

        try {
            const response = api.put(`/user/${email}`, request);
            return response;
        } catch (error) {
            const status = error.response.status;
            const data = error.response.data;
            toast.error(data);
            return { data, status };
        }
    }

    useEffect(() => {
        const getUserData = async () => {
          try {
            const response = await api.get(`/user/${email}`);
            setUsername(response.data.username);
            setPhoto(response.data.photo);
          } catch (error) {
            console.error(error);
          }
        }
  
        getUserData();
      }, [email]);

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
            const response = changePassword();

            if (response.status === 201) {
                toast.success("Usuário criado com sucesso!");
                navigate("/home");
            } else {
                toast.error(response.data);
            }
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

export default FirstLoginPage;