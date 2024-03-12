import { Chart } from "react-google-charts";

function transformData(data) {
    const transformedData = [];
    transformedData.push(["Nome", "Total de Disciplinas"]);
    
    data.forEach(item => {
        transformedData.push([item.nome, item.total_subjects]);
    });

    return transformedData;
}

// Puxar da API
let data = [
    {
        matricula : 1234,
        cpf : 12345,
        nome : "Pedro",
        total_subjects : 20
    },
    {
        matricula : 12324,
        cpf : 123245,
        nome : "julio",
        total_subjects : 10
    },
    {
        matricula : 124,
        cpf : 1245,
        nome : "Joao",
        total_subjects : 30
    }
]

export const realdata = transformData(data);
export const options = {
    title: "Total de disciplinas por professor",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
        title: "Total de disciplinas",
        minValue: 0,
    },
    vAxis: {
        title: "Nome",
    },
};

function barChart() {
    return (
        <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={realdata}
            options={options}
        />
    )
}

export default barChart;