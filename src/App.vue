<template>
  <div id="app">
    <div class="md-layout">
      <div class="md-layout-item md-size-20"></div>
      <div class="md-layout-item"> 
          <!-- <CardComponent /> -->
          <!-- <ApiComponent /> -->
          <!-- <ButtonComponent /> -->
          <imageComponent />
          <randomImageComp />
      </div>
      <div class="md-layout-item md-size-20"></div>
    </div>
   
  </div>
</template>

<script>
import CardComponent from './components/CardComponent.vue'
import ApiComponent from './components/ApiComponent.vue'
import ButtonComponent from './components/ButtonComponent'
import imageComponent from './components/imageComponent'
import randomImageComp from './components/randomImageComp'
export default {
  name: 'app',
  components: {
    CardComponent, 
    ApiComponent,
    ButtonComponent, 
    imageComponent,
    randomImageComp,
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


