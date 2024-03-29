import React from "react";
import { Chart } from "react-google-charts";

function transformData(data) {
   // Inicializamos a matriz resultante com os cabeçalhos
   const result = [['Subject', 'Total number of students', 'Average']];

   // Iteramos sobre cada objeto na lista de dicionários
   data.forEach(item => {
       // Criamos uma nova matriz com os valores de cada objeto e a adicionamos ao resultado
       const values = [item['Subject:'], item['Total number of students in the subject'], item['Average:']];
       result.push(values);
   });

   return result;
}

let data = [
    {
        'Subject:' : "Português",
        'Total number of students in the subject' : 40,
        'Average:' : 50
    },
    {
        'Subject:' : "Matemática",
        'Total number of students in the subject' : 90,
        'Average:' : 30
    },
    {
        'Subject:' : "Artes",
        'Total number of students in the subject' : 20,
        'Average:' : 80
    }
];

const transformedData = transformData(data);

export const options = {
    title: "Estudantes por disciplina",
    legend: { position: "top" },
    colors: ["#5C3292", "#1A8763"],
};

function BarChart() {

    const chartStyle = {
        marginBottom: '20px',
        marginTop: "100px"
    };

    return (
        <Chart
            chartType="Bar"
            width="60%"
            height="200px"
            data={transformedData}
            options={options}
            style={chartStyle}
        />
    );
}

export default BarChart;
