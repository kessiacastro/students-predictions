<template>
  <div id="cards" class="card">
    <header class="card-header">
      <p class="card-header-title">
        Component
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Save</a>
      <a class="card-footer-item">Edit</a>
      <a class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'cards',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
</style>
