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

    <section class="mt has-text-centered">
      <h1 class="mt title is-3">Estatísticas</h1>
      <div class="tabs is-centered">
        <ul>
          <li><a @click="currentChart='pie'">Gráfico em Pizza</a></li>
          <li><a @click="currentChart='bar'">Gráfico em Barra</a></li>
          <li><a @click="currentChart='polar'">Gráfico Polar</a></li>
          <li><a @click="currentChart='doughnut'">Gráfico de Rosca</a></li>
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
      aprovados: APROVADOS,
      reprovados: REPROVADOS,
      evadidos: EVADIDOS,
      num_aprovados: APROVADOS.length,
      num_evadidos: EVADIDOS.length,
      num_reprovados: REPROVADOS.length,
      currentChart: 'pie',
      showData: false,
      isLoading: false
    }
  },
  methods: {
    upload () {
      this.isLoading = "true"
      let that = this
      setTimeout (function () {
          that.isLoading = false
          that.showData = true
      }, 2000);
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
.graphs {
  height: 400px;
  width: 400px;
}
</style>
