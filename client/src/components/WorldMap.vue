<template lang="html">
  <div id="world_map">
    <h1>My Endangered Wildlife</h1>
    <favourites :profile="profile"></favourites
    <ul>
      <continent-detail v-for="(continent, index) in continents" :key="index" :continent="continent" :favouriteAnimals="favouriteAnimals"></continent-detail>
    </ul>

  </div>

</template>

<script>
import ContinentDetail from './ContinentDetail.vue'
import Favourites from './Favourites.vue'
import {eventBus} from "../main.js";

export default {
  name: "world-map",
  props: ["continents"],
  components: {
    'continent-detail': ContinentDetail,
    'favourites': Favourites
  },
  data() {
     return {
       profile: "false",
       favouriteAnimals: []
  }
},
mounted(){
  eventBus.$on("select-fav", (animal) => {
      if (this.favouriteAnimals.length < 3 && !this.favouriteAnimals.includes(animal))
      this.favouriteAnimals.push(animal)
      else if (this.favouriteAnimals.includes(animal))
      this.favouriteAnimals.splice(this.favouriteAnimals.indexOf(animal, 1))
  })

  eventBus.$on("animal-favourites", () => {
    this.favouriteAnimals = []
  })
},
methods: {
  clearFavourites() {
    this.favouriteAnimals = []
  }
}
}
</script>

<style lang="css" scoped>

h1{
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 30px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  text-decoration: underline;

}

ul {
  list-style: none;
}
</style>
