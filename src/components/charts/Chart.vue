<template>
      <canvas id="myChart" width="400" height="400"></canvas>
</template>

<script>

export default {
  name: 'chart',
  props: ['type', 'aprovados', 'reprovados', 'evadidos'],
  mounted: function() {
    new Chart(document.getElementById("myChart"), {
        type: this.type,
        data: {
          labels: ["Aprovados", "Evadidos", "Reprovados"],
          datasets: [{
            label: "Número de alunos",
            backgroundColor: ["#22C65B", "#FFDB4A","#FF2B56"],
            data: [this.aprovados, this.evadidos, this.reprovados]
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Alunos que tendem a serem aprovados, evadidos ou reprovados'
          }
        }
    })
  }
}
</script>

