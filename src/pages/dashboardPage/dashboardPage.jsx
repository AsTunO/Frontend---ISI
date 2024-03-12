import "./dashboardPage.css"

import BarChartProfessor from "../../components/Charts/Professor/barChartProfessor.jsx"
import BarChartStudent from "../../components/Charts/Student/barChartStudent.jsx"
import LineChartSubject from "../../components/Charts/Subject/lineChartSubject.jsx"

function dashboardPage() {

    return (
        <>
            <div>
                Dashboard
            </div>

            <BarChartProfessor />
            <BarChartStudent />
            <LineChartSubject />
        </>
    )
}

export default dashboardPage