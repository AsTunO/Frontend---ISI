import "./dashboardPage.css"

import Header from "../../components/Header/header.jsx"
import Footer from "../../components/Footer/footer.jsx"
import SideBar from "../../components/Sidebar/sidebar.jsx"

import BarChartProfessor from "../../components/Charts/Professor/barChartProfessor.jsx"
import BarChartStudent from "../../components/Charts/Student/barChartStudent.jsx"
import LineChartSubject from "../../components/Charts/Subject/lineChartSubject.jsx"

function dashboardPage() {

    return (
        <>
            <Header />
            <SideBar />
            <div className="chart-container">
                <BarChartProfessor />
                <BarChartStudent />
            </div>
            <LineChartSubject />
            <Footer />
        </>
    )
}

export default dashboardPage
