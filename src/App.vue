<template>
  <div id="app">
    <img src="./assets/logo2.png">
    <HelloWorld msg="Lambda Go/Vue project"/>
    <ApiComponent />


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CardComponent from './components/CardComponent.vue'
import ApiComponent from './components/ApiComponent.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    CardComponent, 
    ApiComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
