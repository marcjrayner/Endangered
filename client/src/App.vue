<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(animal, index) in animals" :key="index" :animal="animal">{{animal.name}}</li>
    </ul>
  </div>
</template>

<script>
import AnimalsService from './services/AnimalsService.js'

export default {
  name: 'app',
  data(){
    return {
      animals: []
    };
  },
  mounted(){
    AnimalsService.getAnimals()
    .then(animals => this.animals = animals);
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
