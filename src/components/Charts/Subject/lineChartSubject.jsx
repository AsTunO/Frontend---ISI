import { Chart } from "react-google-charts";

let data = [
    {
        "Subject" : 1,
        "Attending students rate" : 3
    },
    {
        "Subject" : 2,
        "Attending students rate" : 1
    },
    {
        "Subject" : 3,
        "Attending students rate" : 7
    },
    {
        "Subject" : 4,
        "Attending students rate" : 0
    },
    {
        "Subject" : 5,
        "Attending students rate" : 10
    },
];

const transformedData = data.map(item => [item['Subject'], item['Attending students rate']]);

export const options = {
    title: "Taxa de aprovação por disciplina",
    legend: { position: "top" },
    colors: ["#5C3292"],
    hAxis: { title: "Disciplina" },
    vAxis: { title: "Taxa de aprovação" },
};

function LineChart() {

    const chartStyle = {
        marginTop: '100px',
        marginLeft: '150px',
        marginBottom: '20px',
    };
    return (
        <Chart
            chartType="LineChart"
            width="80%"
            height="200px"
            data={[['Subject', 'Attending students rate'], ...transformedData]}
            options={options}
            style={chartStyle}
        />
    );
}

export default LineChart;
