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

    }
  },
  mounted(){
    ContinentsService.getContinents()
    .then(continents => this.continents = continents)
    ThreatsService.getThreats()
    .then(threats => this.threatObjects = threats)
}
}

</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

body{

background-image: url('./assets/continent.png');
background-repeat: no-repeat;
background-size: 2000px 900px
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
}

</style>
