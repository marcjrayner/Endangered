<template>
  <div id="app">
    <div class="sidenav">

<img class="navImg" src="./assets/white.png" alt="">
<img class="navImg" src="./assets/white.png" alt="">


<button type="button" name="button">Reset</button>
<button type="button" name="button">Issues</button>


</div>


<world-map :continents="continents" :threatObjects="threatObjects"></world-map>
>>>>>>> develop

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
}


</script>


<style>


body{

background-image: url('./assets/continent.png');
background-repeat: no-repeat;
background-size: 2000px 900px
}

.navImg {
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
    display:block;
    float: left;
    margin: 2px;
    padding-left: 2px;
    height: 45px;
    width: 45px;

}

.sidenav {
  height: auto%;
  width: 140px;
  position: absolute;
  z-index: 1;
  top: 500px;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px;
  padding: 0px 10px;
}

</style>
