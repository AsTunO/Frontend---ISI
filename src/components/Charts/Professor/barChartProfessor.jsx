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
        title: "Numero de disciplinas",
        minValue: 0,
    },
    vAxis: {
        title: "Professor",
    },
};

function barChart() {
    const chartStyle = {
        marginLeft: '150px',
        marginBottom: '20px',
        marginTop: "40px",
        marginRight: "20px"
    };

    return (
        <Chart
            chartType="BarChart"
            width="65%" // reduzindo o tamanho do gráfico
            height="300px" // reduzindo o tamanho do gráfico
            data={realdata}
            options={options}
            style={chartStyle}
        />
    )
}

export default barChart;