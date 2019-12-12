<template lang="html">

<div class="">
<div class="navB">


  <button @click="clearFavourites()" class="myButton"type="button">Reset Favourites</button>
  <biggest-threat :biggestThreatObject="biggestThreatObject" ></biggest-threat>
</div>

  <div class="sidenav">
  <p>Favourites</p>
     <img class="navImg" :src="favPic" alt="">
     <img class="navImg" :src="favPic1" alt="">
     <img class="navImg" :src="favPic2" alt="">
  <!-- <button @click="moreInfo()" class="myButton" type="button">More Info</button> -->
  </div>
</div>


</template>

<script>
import {eventBus} from "../main.js";
import BiggestThreat from "./BiggestThreat.vue"
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
  }
},
components: {
  'biggest-threat': BiggestThreat
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

biggest-threat {
  position: inherit;
}

p {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #274769;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
}

.myButton {
	background-color:#274769;
	border-radius:15px;
	border:1px solid white;
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
	background-color:#447DBA;
}
.myButton:active {
	position:relative;
	top:1px;
}

.navImg {
    border-radius: 50%;
    display:block;
    margin: 5px;
    padding-left: 0px;
    height: 70px;
    width: 70px;
    border: solid 2px #274769;
    object-fit: cover;
}

.navB {
  position: absolute;
  top: 800px;
  left: 0;

}
.sidenav {
  height: 350px;
  width: 150px;
  position: absolute;
  z-index: 1;
  top: 430px;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  padding-left: 5px;
  color: #black;
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
