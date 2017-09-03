<template>
      <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>

export default {
  name: 'doughnut',
  props: ['type', 'aprovados', 'reprovados', 'evadidos'],
  mounted: function() {
    new Chart(document.getElementById("myChart"), {
        type: 'doughnut',
        data: {
          labels: ["Aprovados", "Evadidos", "Reprovados"],
          datasets: [{
            label: "Número de alunos",
            backgroundColor: ["rgba(0,219,74,0.5)", "rgba(255,219,74,0.5)","rgba(255,43,86,0.5)"],
            data: [this.aprovados, this.evadidos, this.reprovados]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Alunos que tendem a serem aprovados, evadidos ou reprovados',
            maintainAspectRatio: false
          }
        }
    })
  }
}
</script>