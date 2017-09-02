import Chart from 'chart.js';
import APROVADOS, REPROVADOS, EVADIDOS from '.students-predictions-calculator.js'

// Data from approved, failed, and evaded students
const data = {
    datasets: [{
        data: [APROVADOS.length, EVADIDOS.length, REPROVADOS.length]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Aprovados',
        'Evadidos',
        'Reprovados'
    ]
};

// Takes the context, the element of an html tag
var ctx = document.getElementById("myChart"); // Tag id

export var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Aprovados", "Evadidos", "Reprovados"],
      datasets: [{
        label: "Número de alunos",
        backgroundColor: ["#009933", "#e6e600","#cc0000"],
        data: [APROVADOS.length, EVADIDOS.length, REPROVADOS.length]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Alunos que tendem a serem aprovados, evadidos ou reprovados'
      }
    }
});