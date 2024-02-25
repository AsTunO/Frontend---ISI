import AdminCard from "../AdminCard/adminCard.jsx"
import DashboardCard from "../DashboardCard/dashboardCard.jsx"
import ReportCard from "../ReportCard/reportCard.jsx"
import UserCard from "../UserCard/userCard.jsx"

import "./cardsList.css"

function cardsList() {
    return (
        <div className="cards-list">
            <AdminCard />
            <DashboardCard />
            <ReportCard />
            <UserCard />
        </div>
    )
}

export default cardsList