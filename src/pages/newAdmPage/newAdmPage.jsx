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
import Footer from "../../components/Footer/footer.jsx"

import "./newAdmPage.css";

function NewAdmPage() {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [cpfInput, setCpfInput] = useState("");
    const [photoInput, setPhotoInput] = useState("");
    const navigate = useNavigate();

    function handleNameChange(event) {
        setNameInput(event.target.value);
    }

    function handleEmailChange(event) {
        setEmailInput(event.target.value);
    }

    function handleCpfChange(event) {
        setCpfInput(event.target.value)
    }

    function handlePhotoChange(event) {
        setPhotoInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // TODO: além da validação pelo frontend, necessário validar junto a api
        if (nameInput == "" || emailInput == "" || cpfInput == "") {
            toast.error("Todos os campos com * devem ser preenchidos!");
        }
        else {
            console.log(photoInput);
            toast.success("Usuário criado com sucesso!");
            navigate("/home");
        }
    }

    return(
        <div className="adm-page">
            <Header title={"Criar Novo Administrador"} />
            <Sidebar />

            <div className="create">
                <form action={handleSubmit} className="create-form">

                <h2>Digite os dados do novo Administrador</h2>

                <GenericInput placeholder={"Nome*"} name={"name"} onChange={handleNameChange} />
                <EmailInput placeholder={"Email*"} name={"email"} onChange={handleEmailChange} /> 
                <CPFInput placeholder={"CPF*"} name={"cpf"} onChange={handleCpfChange} />
                <GenericInput placeholder={"Link para foto"} name={"photo"} onChange={handlePhotoChange} />

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