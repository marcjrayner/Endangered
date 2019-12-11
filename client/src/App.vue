<template>
  <div id="app">

<world-map :continents="continents" :threatObjects="threatObjects"></world-map>

  </div>
</template>

<script>
import ContinentsService from './services/ContinentsService.js';
import ThreatsService from './services/ThreatsService.js';
import WorldMap from './components/WorldMap.vue';

export default {
  name: 'app',
  components: {
    "world-map": WorldMap
  },
  data(){
    return {
      continents: [],
      threatObjects:[]
    };
  },
  mounted(){
    ContinentsService.getContinents()
    .then(continents => this.continents = continents)
    ThreatsService.getThreats()
    .then(threats => this.threatObjects = threats)
    ;
  }
}
</script>

<style>


body{

background-image: url('./assets/Continents.png');
background-repeat: no-repeat;
background-size: 2000px 900px
}
</style>
