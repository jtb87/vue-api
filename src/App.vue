<template>
  <div id="app">
   <!--  <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item"> -->
        <!-- <img src="./assets/logo2.png"> -->
          <CardComponent />
          <!-- <ApiComponent /> -->
      <!-- </div>
      <div class="md-layout-item"></div>
    </div>
    -->
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import ApiComponent from './components/ApiComponent.vue'

export default {
  name: 'app',
  components: {
    CardComponent, 
    ApiComponent, 
  }
}

</script>

<style>

#app {
  max-width:600px;
  font-family: 'Roboto','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


