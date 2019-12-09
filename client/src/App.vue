<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(continent, index) in continents" :key="index" :continent="continent">{{continent.animals[0].name}}</li>
    </ul>
  </div>
</template>

<script>
import ContinentsService from './services/ContinentsService.js'

export default {
  name: 'app',
  data(){
    return {
      continents: []
    };
  },
  mounted(){
    ContinentsService.getContinents()
    .then(continents => this.continents = continents)
    ;
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
