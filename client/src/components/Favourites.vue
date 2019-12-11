<template lang="html">

  <div class="sidenav">
     <p>Favourites</p>
     <img class="navImg" :src="favPic" alt="">
     <img class="navImg" :src="favPic1" alt="">
     <img class="navImg" :src="favPic2" alt="">


  <button @click="clearFavourites()" class="myButton"type="button">Reset</button>
  <button @click="moreInfo()" class="myButton" type="button">More Info</button>
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
      for (let i = 1; i < this.favouriteAnimals.length; i ++){
        if (this.favouriteAnimals[i]){
          console.log('fav')
          return this.favouriteAnimals[i].image
        } else {
          console.log('white')
          return './assets/black.gif'
        }
      }
    },
    favPic2(){
      for (let i = 2; i < this.favouriteAnimals.length; i ++){
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

p {
  text-align: center;
  text-decoration: underline;
  font-size: 25px;
  font-weight: bold;
  color: #FC766AFF;
}

.myButton {
	background-color:#FC766AFF;
	border-radius:15px;
	border:2px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:5px 20px;
	text-decoration:none;
	text-shadow:0px 0px 0px #2f6627;
}
.myButton:hover {
	background-color:#5cbf2a;
}
.myButton:active {
	position:relative;
	top:1px;
}

.navImg {
    border-top-left-radius: 50% 50%;
    border-top-right-radius: 50% 50%;
    border-bottom-right-radius: 50% 50%;
    border-bottom-left-radius: 50% 50%;
    display:block;
    float: left;
    margin: 5px;
    padding-left: 0px;
    height: 45px;
    width: 65px;
    border-style: solid;
    object-fit: cover;
}

.sidenav {
  height: 360px;
  width: 127px;
  position: absolute;
  z-index: 1;
  top: 500px;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 5px;
  color: #black;
  background-color: #5B84B1FF;
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
