import './homePage.css'
import Header from '../../components/Header/header.jsx' 
import Card from "../../components/Card/Card.jsx"

import adminIconImage from "../../imgs/admin-icon.png";
import reportIconImage from "../../imgs/report-icon.png";
import userIconImage from "../../imgs/user-icon.png";
import dashboardIconImage from "../../imgs/dashboard-icon.png";

function homePage() {
  return (
    <div className="home-page">
      <Header title={"Página Inicial"} />
      <div className="cards-list">
        <Card title={"Dashboard"} alt={"admin icon"} icon={dashboardIconImage} route={"/"} />
        <Card title={"Relatório"} alt={"admin icon"} icon={reportIconImage} route={"/reports"} />
        <Card title={"Usuário"} alt={"admin icon"} icon={userIconImage} route={"/"} />
        <Card title={"Cria Administrador"} alt={"admin icon"} icon={adminIconImage} route={"/new-adm"} />
      </div>
    </div>
  )
}

export default homePage
