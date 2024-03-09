import Card from "../../components/Card/Card.jsx"

import adminIconImage from "../../imgs/admin-icon.png";
import reportIconImage from "../../imgs/report-icon.png";
import userIconImage from "../../imgs/user-icon.png";
import dashboardIconImage from "../../imgs/dashboard-icon.png";

import "./cardsList.css";

function CardsList() {
    return(
        <div className="cards-list">
        <Card title={"Dashboard"} alt={"admin icon"} icon={dashboardIconImage} route={"/dashboard"} />
        <Card title={"Relatório"} alt={"admin icon"} icon={reportIconImage} route={"/"} />
        <Card title={"Usuário"} alt={"admin icon"} icon={userIconImage} route={"/profile"} />
        <Card title={"Cria Administrador"} alt={"admin icon"} icon={adminIconImage} route={"/new-adm"} />
      </div>
    );
}

export default CardsList;