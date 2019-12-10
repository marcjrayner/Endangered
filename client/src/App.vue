<template lang="html">
  <div id="app">

<world-map :continents="continents"></world-map>

  </div>
</template>

<script>
import ContinentsService from './services/ContinentsService.js';
import WorldMap from './components/WorldMap.vue';

export default {
  name: 'app',
  components: {
    "world-map": WorldMap
  },
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


body{

background-image: url('./assets/Continents.png');
background-repeat: no-repeat;
background-size: 2000px 900px
}
</style>
