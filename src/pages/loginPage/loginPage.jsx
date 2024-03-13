import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

import PasswordInput from '../../components/Inputs/passwordInput/passwordInput.jsx';
import StandartButton from '../../components/Buttons/standartButton/standartButton.jsx';
import GenericInput from "../../components/Inputs/GenericInput/genericInput.jsx";
import { useAuth } from "../../Context/AuthContext.jsx";
import api from "../../Api.js";

import './loginPage.css';

function LoginPage() {
    const navigate = useNavigate();
    const { setToken, setEmail } = useAuth();
    
    const [email, setEmailField] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        const send_data = {
            email: email,
            senha: senha
        }

        const { data, status} = await api.post("/login", send_data).catch((error) => {
            const status = error.response.status;
            const data = error.response.data;
            return { data, status };
        });


        console.log(email, senha);

        if (status == 200) {
            setToken(data.access_token)
            setEmail(email)
            const rota = senha != "upe.c@ru@ru" ? "/" : "/first-login"
            navigate(rota, { replace: true });
            toast.success(data.message);
        } else if (status == 400) {
            toast.warning(data.message);
        } else {
            toast.error(data.message);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin(e);
        }
    }

    return (
        <div className="login-page">
        <div className="login-card">
            {/* <form> */}
                <GenericInput
                    type={"email"} 
                    placeholder={"Digite seu email"} 
                    onChange={(e) => [setEmailField(e.target.value)]} 
                    value={email}
                    onKeyPress={handleKeyPress}
                />

                <PasswordInput
                    onChange={(e) => [setSenha(e.target.value)]}
                    value={senha}
                    onKeyPress={handleKeyPress}
                />

                <StandartButton onClick={handleLogin} name={"Entrar"} type={"button"} />
                {/* <button type="button" onClick={handleLogin}>Entrar</button> */}
            {/* </form> */}
        </div>
        </div>
    );
}

export default LoginPage;
