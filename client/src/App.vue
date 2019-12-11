<template>
  <div id="app">
    <div class="sidenav">
<div class="">


<img src="" alt="./assets/white.png">
<img src="" alt="./assets/white.png">
<img src="" alt="./assets/white.png">
</div>
<button type="button" name="button">Reset</button>
<button type="button" name="button">Issues</button>


</div>



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
    ;},
     NavPop() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
  // ,
  // methods: {
  //    openSlideMenu() {
  //     document.getElementById('menu').style.width='250px';
  //     document.getElementById('content').style.marginLeft = '250px';
  //   },
  //    closeSlideMenu() {
  //     document.getElementById('menu').style.width='0';
  //     document.getElementById('content').style.marginLeft = '0';
  //   }
  // }
}


</script>


<style>


body{

background-image: url('./assets/continent.png');
background-repeat: no-repeat;
background-size: 2000px 900px
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
