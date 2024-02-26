import "./sidebar.css";

import NavButton from "../Buttons/navButton/navButton";

import homeIcon from "../../imgs/home-icon.svg";
import newAdminIcon from "../../imgs/admin-icon.png";
import reportIcon from "../../imgs/report-icon.png";
import userIcon from "../../imgs/user-icon.png";
import dashboardIcon from "../../imgs/dashboard-icon.png";

function Sidebar() {
    return (
        <div className="sidebar">
            <NavButton icon={homeIcon} title={"Home"} alt={"home icon"} route={"/home"} />
            <NavButton icon={dashboardIcon} title={"Dashboard"} alt={"dashboard icon"} route={"/"} />
            <NavButton icon={reportIcon} title={"Relatório"} alt={"report icon"} route={"/"} />
            <NavButton icon={userIcon} title={"Usuário"} alt={"user icon"} route={"/"} />
            <NavButton icon={newAdminIcon} title={"Criar Admin"} alt={"new adm icon"} route={"/new-adm"} />
        </div>
    );
}

export default Sidebar;