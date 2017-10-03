<template>
  <div id="cards" class="card">
    <header class="card-header" :style="style">
      <p class="card-header-title">
        Tende a ser {{title}}: {{showData && !isLoading ? studentList.length : ''}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-show="!showData && !isLoading">Nenhum aluno encontrado.</div>
        <div v-if="isLoading" class="has-text-centered loading">
          <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw loading-icon"></i>
        </div>
        <table v-else class="table is-fullwidth" v-show="showData">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Média Final</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in studentList">
            <td>{{student['Matricula']}}</td>
            <td>{{student['Media_Final']}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Salvar</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'cards',
  props:['studentList', 'title', 'styleType', 'showData', 'isLoading'],
  computed: {
    style () {
      let colors = {
        'is-success': '#22C65B',
        'is-danger': '#FF2B56',
        'is-warning': '#FFDB4A'
      }
      return 'background-color: ' + colors[this.styleType]
    }
  }
}
</script>
<style scopped>
.content {
  height: 250px;
  overflow: auto;
}
.loading {
  height: 100%;
  padding: 100px;
}
.loading-icon {
  color: #DBDBDB;
}
</style>
