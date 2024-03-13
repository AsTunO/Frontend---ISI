/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Header from "../../components/Header/header.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";
import GenericInput from "../../components/Inputs/GenericInput/genericInput.jsx";
import EmailInput from "../../components/Inputs/EmailInput/emailInput.jsx";
import StandartButton from "../../components/Buttons/standartButton/standartButton.jsx";
import Footer from "../../components/Footer/footer.jsx"

import "./newAdmPage.css";
import api from "../../Api.js";

function NewAdmPage() {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [photoInput, setPhotoInput] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        // TODO: além da validação pelo frontend, necessário validar junto a api
        if (nameInput == "" || emailInput == "") {
            toast.error("Todos os campos com * devem ser preenchidos!");
        }
        else {
            const request = {
                username: nameInput,
                email: emailInput,
                photo: photoInput,
                senha: "upe.c@ru@ru"
            }

            // const response = await api.get("/user").catch((error) => {
            const response = await api.post("/user", request)
            .catch((error) => {
                const status = error.response.status;
                const data = error.response.data;
                toast.error(data.message);
                return { data, status };
            });
            console.log(response)
            if (!response) {
                navigate("/home");
                toast.error("Apenas administradores podem criar novos administradores!");
            }

            if (response.status === 201) {
                toast.success("Usuário criado com sucesso!");
                navigate("/home");
            }
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return(
        <div className="adm-page">
            <Header title={"Criar Novo Administrador"} />
            <Sidebar />

            <div className="create">
                <form action={handleSubmit} className="create-form">

                <h2>Digite os dados do novo Administrador</h2>

                <GenericInput placeholder={"Nome*"} name={"name"} onChange={(e) => [setNameInput(e.target.value)]} onKeyPress={handleKeyPress} />
                <EmailInput placeholder={"Email*"} name={"email"} onChange={(e) => [setEmailInput(e.target.value)]} onKeyPress={handleKeyPress} /> 
                <GenericInput placeholder={"Link para foto"} name={"photo"} onChange={(e) => [setPhotoInput(e.target.value)]} onKeyPress={handleKeyPress} />

                <span>O novo usuáro será criado com a senha padrão: upe.c@ru@ru<br /></span>
                <span>Será solicitado alteração de senha no primeiro acesso</span>
                <span>Será criado um novo administrador, que poderá visualizar o dashboard e os relatórios, porém ele não conseguirá adicionar novos administradores.</span>

                <StandartButton name={"Criar"} onClick={handleSubmit}/>
                </form>
            </div>
            <Footer />
            <div className="msg">
            </div>
        </div>
    );
}

export default NewAdmPage;