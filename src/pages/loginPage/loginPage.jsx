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
    const { setToken } = useAuth();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        const { data, status} = await api.post("/login", {email, senha}).catch((error) => {
            const status = error.response.status;
            const data = error.response.data;
            return { data, status };
        });


        console.log(email, senha);

        if (status == 200) {
            setToken(data.access_token)
            const rota = senha != "upe.c@ru@ru" ? "/" : "/fist-login"
            navigate(rota, { replace: true });
            toast.success(data.message);
        } else if (status == 400) {
            toast.warning(data.message);
        } else {
            toast.error(data.message);
        }
    }

    return (
        <div className="login-page">
        <div className="login-card">
            {/* <form> */}
                <GenericInput
                    type={"email"} 
                    placeholder={"Digite seu email"} 
                    onChange={(e) => [setEmail(e.target.value)]} 
                    value={email}
                />

                <PasswordInput
                    onChange={(e) => [setSenha(e.target.value)]}
                    value={senha}
                />

                <StandartButton onClick={handleLogin} name={"Entrar"} type={"button"} />
                {/* <button type="button" onClick={handleLogin}>Entrar</button> */}
            {/* </form> */}
        </div>
        </div>
    );
}

export default LoginPage;
