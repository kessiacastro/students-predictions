<template>
  <div id="cards" class="card">
    <header class="card-header" :style="style">
      <p class="card-header-title">
        Tende a ser {{title}}: {{studentList.length}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <table class="table is-fullwidth">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in studentList">
            <td>{{student.nome}}</td>
            <td>{{student.curso}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Save</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'cards',
  props:['studentList', 'title', 'styleType'],
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
</style>
