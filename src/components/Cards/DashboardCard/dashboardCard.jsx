import "./dashboardCard.css"
import dashboardIconImage from "../../../imgs/dashboard-icon.png"

function dashboardCard() {
    return(
        <div className="card-container">
            <img
                src={dashboardIconImage}
                alt="Icone do dashboard"
                className="dashboard-icon-image"
            />
            <span className="card-title">Dashboard</span>
        </div>
    )
}

export default dashboardCard