<template lang="html">

  <div class="sidenav">
     <p>Favourites</p>
     <img class="navImg" :src="favPic" alt="">
     <img class="navImg" :src="favPic1" alt="">
     <img class="navImg" :src="favPic" alt="">


  <button @click="clearFavourites()" type="button">Reset</button>
  <button @click="moreInfo()"  type="button">More Info</button>
  </div>


</template>

<script>
import {eventBus} from "../main.js";
import WorldMap from "./WorldMap.vue"

export default {
name: "favourites",
props: ["biggestThreatObject", "favouriteAnimals"],
data(){
  return {
}
},
methods: {
  clearFavourites() {
    eventBus.$emit("clear-animals")
  },
  moreInfo() {
    eventBus.$emit("more-info")
  }
},
  computed: {
    favPic(){
      for (let i = 0; i < this.favouriteAnimals.length; i ++){
        if (this.favouriteAnimals[i]){
          console.log('fav')
          return this.favouriteAnimals[i].image
        } else {
          console.log('white')
          return './assets/black.gif'
        }
      }
    },
    favPic1(){
      for (let i = 0; i < this.favouriteAnimals.length; i ++){
        if (this.favouriteAnimals[i]){
          console.log('fav')
          return this.favouriteAnimals[i].image
        } else {
          console.log('white')
          return './assets/black.gif'
        }
      }
    }
  }
}

</script>

<style lang="css" scoped>

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
    border-style: solid;

}

.sidenav {
  height: auto%;
  width: 140px;
  position: absolute;
  z-index: 1;
  top: 500px;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  color: #black;
  background-color: #DCDCDC;
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
</style>
