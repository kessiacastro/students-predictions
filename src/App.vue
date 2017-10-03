<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1>Students Predictions</h1>
        </a>
      </div>
    </nav>
    <section class="mt">
      <div class="container has-text-centered">
        <div class="notification">
          <h1 class="title is-3">Adicione os dados dos estudantes:</h1>
          <a class="button is-info" :class="{ 'is-loading': isLoading }" @click="upload()">
            <span class="icon">
              <i class="fa fa-upload"></i>
            </span>
            <span>Upload</span>
          </a>
        </div>
      </div>
    </section>
    <section class="mt">
      <div class="container">
        <div class="columns">
          <div class="column">
            <card title='aprovado' :studentList="aprovados"
                                   :styleType="'is-success'"
                                   :showData="showData"
                                   :isLoading="isLoading">
            </card>
          </div>
          <div class="column">
            <card title='reprovado' :studentList="reprovados"
                                    :styleType="'is-danger'"
                                    :showData="showData"
                                    :isLoading="isLoading">
            </card>
          </div>
          <div class="column">
            <card title='evadido' :studentList="evadidos"
                                  :styleType="'is-warning'"
                                  :showData="showData"
                                  :isLoading="isLoading">
            </card>
          </div>
        </div>
      </div>
    </section>

    <section class="mt mb has-text-centered">
      <h1 class="mt title is-3">Estatísticas</h1>
      <div class="tabs is-centered">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.selected }">
            <a @click="setGraph(tab)">{{tab.description}}</a>
          </li>
        </ul>
      </div>
      <div class="container graphs">
        <component v-show="showData && !isLoading" :is="currentChart"
                                     :aprovados="num_aprovados"
                                     :reprovados="num_reprovados"
                                     :evadidos="num_evadidos">
        </component>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './components/cards/Card.vue'
import Bar from './components/charts/Bar.vue'
import Pie from './components/charts/Pie.vue'
import Polar from './components/charts/Polar.vue'
import Doughnut from './components/charts/Doughnut.vue'
import { APROVADOS, REPROVADOS, EVADIDOS } from './mocks/students-predictions-calculator.js'
import csvJSON from './utils/csvToJson'
import decisionTree from './decision_tree/decision_tree'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Card,
    Polar,
    Pie,
    Bar,
    Doughnut,
  },
  data () {
    return {
      aprovados: [],
      reprovados: [],
      evadidos: [],
      currentChart: 'pie',
      showData: false,
      isLoading: false,
      tabs: [
        {'name': 'pie', 'description': 'Gráfico em Pizza', 'selected': false},
        {'name': 'bar', 'description': 'Gráfico em Barra', 'selected': false},
        {'name': 'polar', 'description': 'Gráfico Polar', 'selected': false},
        {'name': 'doughnut', 'description': 'Gráfico em Rosca', 'selected': false}
      ],
      students: null
    }
  },
  computed: {
    num_aprovados: function() {
      return this.aprovados.length
    },
    num_evadidos: function() {
      return this.evadidos.length
    },
    num_reprovados: function() {
      return this.reprovados.length
    }
  },
  methods: {
    upload () {
      this.isLoading = "true"
      axios.get('http://localhost:8080/src/mocks/students_data.txt').then(res => {
      let data = csvJSON(res.data)
      data.forEach(element => {
        // Media_Final, Faltas, Renda, CoefRendimento, Frequencia
        let result = decisionTree(element['Media_Final'], element['Faltas'], element['Renda'], element['CoefRendimento'], element['Frequencia'])
        let bigger = result.sort()
        if (result.indexOf(bigger[0]) === 0) {
          element['Resultado'] = 'Aprovado'
          this.aprovados.push(element)
        }
        if (result.indexOf(bigger[0]) === 1) {
          element['Resultado'] = 'Reprovado'
           this.reprovados.push(element)
        }
        if (result.indexOf(bigger[0]) === 2) {
          element['Resultado'] = 'Evadido'
           this.evadidos.push(element)
        }
      })
      this.students = data
      this.isLoading = false
      this.showData = true
      this.tabs[0].selected = true
    });
    },
    setGraph (tab) {
      this.currentChart = tab.name
      this.tabs.forEach( (element) => {
        element.selected = element.name === tab.name
      })
    }
  }
}
</script>
<style>
.navbar {
  background-color: #00D1B2;
}
a.navbar-item {
  color: #FFF
}
a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:hover, .navbar-link.is-active {
  color: #00D1B2;
  background-color: #FFF;
}
.mt {
  margin-top: 1em;
}
.mb {
  margin-bottom: 1em;
}
.graphs {
  height: 400px;
  width: 400px;
}
</style>
