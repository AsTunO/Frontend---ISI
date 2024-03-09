import "./dashboardPage.css"

import LineChart from "../../components/Charts/lineChart.jsx"
import SankeyChart from "../../components/Charts/sankeyChart.jsx"
import BarChart from "../../components/Charts/barChart.jsx"

function dashboardPage() {

    return (
        <>
            <div>
                Dashboard
            </div>

            <LineChart />
            <SankeyChart />
            <BarChart />
        </>
    )
}

export default dashboardPage