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
    title: "Attending Students Rate by Subject",
    legend: { position: "top" },
    colors: ["#5C3292"],
    hAxis: { title: "Subject" },
    vAxis: { title: "Attending students rate" },
};

function LineChart() {
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={[['Subject', 'Attending students rate'], ...transformedData]}
            options={options}
        />
    );
}

export default LineChart;
