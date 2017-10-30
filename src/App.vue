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
              <i class="fa fa-flask"></i>
            </span>
            <span>Analisar</span>
          </a>
        </div>
      </div>
    </section>
    <section class="mt mb has-text-centered" v-show="showData && !isLoading">
      <h1 class="title is-5 mt">Aplicar filtros:</h1>
      <div class="field mt is-horizontal">
        <div class="field-body">
          <div class="field">
            <div class="control has-text-centered">
              <div class="select">
                <select @change="filterData($event.target.value.split(','))">
                  <option>Etnia:</option>
                  <option :value="['Etnia', 'Branca']">Branca</option>
                  <option :value="['Etnia', 'Preta']">Preta</option>
                  <option :value="['Etnia', 'Parda']">Parda</option>
                  <option :value="['Etnia', 'Indígena']">Indígena</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control has-text-centered">
              <div class="select">
                <select @change="filterData($event.target.value.split(','))">
                  <option>Escola de Origem:</option>
                  <option :value="['Tipo_Escola_Origem', 'Pública Estadual']">Pública Estadual</option>
                  <option :value="['Tipo_Escola_Origem', 'Pública Federal']">Pública Federal</option>
                  <option :value="['Tipo_Escola_Origem', 'Privada']">Privada</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <div class="control has-text-centered">
              <div class="select">
                <select @change="filterData($event.target.value.split(','))">
                  <option>Sexo:</option>
                  <option :value="['Sexo', 'F']">Feminino</option>
                  <option :value="['Sexo', 'M']">Masculino</option>
                </select>
              </div>
            </div>
          </div>
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
import decisionTree from './decision_tree/decision_tree.js'
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
      currentChart: '',
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
      this.isLoading = true
      axios.get('http://localhost:8080/src/mocks/students_data.js').then(res => {
      let data = res.data
      console.log(data[0])
      console.log(data[3])
      console.log(data[150])
      data.forEach(element => {
        // Media_Final, Faltas, Renda, CoefRendimento, Frequencia
        let result = decisionTree(parseFloat(element['Media_Final']), parseFloat(element['Faltas']), parseFloat(element['Renda']), parseFloat(element['CoefRendimento']), parseFloat(element['Frequencia']))
        let bigger = Math.max(...result);
        if (result.indexOf(bigger) === 0) {
          element['Resultado'] = 'Aprovado'
          this.aprovados.push(element)
        }
        if (result.indexOf(bigger) === 1) {
          element['Resultado'] = 'Reprovado'
           this.reprovados.push(element)
        }
        if (result.indexOf(bigger) === 2) {
          element['Resultado'] = 'Evadido'
           this.evadidos.push(element)
        }
      })
      this.students = data
      this.tabs[0].selected = true
      this.setGraph (this.tabs[0])
      this.currentChart = 'pie'
      this.isLoading = false
      this.showData = true
    });
    },
    setGraph (tab) {
      this.currentChart = tab.name
      this.tabs.forEach( (element) => {
        element.selected = element.name === tab.name
      })
    },
    filterData (type) {
      this.isLoading = true
      this.showData = false
      this.currentChart = ''
      this.aprovados = this.students.filter(element => element['Resultado'] === 'Aprovado' && element[type[0]] === type[1])
      this.reprovados = this.reprovados.filter(element => element['Resultado'] === 'Reprovado' && element[type[0]] === type[1])
      this.evadidos = this.evadidos.filter(element => element['Resultado'] === 'Evadido' && element[type[0]] === type[1])
      this.isLoading = false
      this.showData = true
      this.tabs[0].selected = true
      this.setGraph (this.tabs[0])
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
