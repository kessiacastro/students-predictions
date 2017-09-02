<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h1>Students Predictions</h1>
        </a>
      </div>
    </nav>
    <section>
      <div class="container has-text-centered">
        <div class="notification">
          <h1 class="title is-3">Adicione os dados dos estudantes:</h1>
          <a class="button is-info">Upload</a>  
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="columns">
          <div class="column">
            <card></card>
          </div>
          <div class="column">
            <card></card>
          </div>
          <div class="column">
            <card></card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './components/cards/Card.vue'
export default {
  name: 'app',
  components: {
    Card
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
