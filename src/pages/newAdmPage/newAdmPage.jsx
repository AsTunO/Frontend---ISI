import "./newAdmPage.css";
import Header from "../../components/Header/header.jsx";
import Sidebar from "../../components/Sidebar/sidebar.jsx";

function NewAdmPage() {
    return(
        <div>
            <Header title={"Criar Novo Administrador"} />
            <Sidebar />
        </div>
    );
}

export default NewAdmPage;