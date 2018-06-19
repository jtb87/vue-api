<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item"></div>
      <div class="md-layout-item"> 
          <CardComponent />
          <!-- <ApiComponent /> -->
          <ButtonComponent />
      </div>
      <div class="md-layout-item"></div>
    </div>
   
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import ApiComponent from './components/ApiComponent.vue'
import ButtonComponent from './components/ButtonComponent'

export default {
  name: 'app',
  components: {
    CardComponent, 
    ApiComponent,
    ButtonComponent, 
  }
}

</script>

<style>

.md-layout{
  margin-top: 60px;

}

.md-card{
  margin-top: 50px;
}

#app {
  font-family: 'Roboto','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


