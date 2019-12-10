<template lang="html">
  <div>
  <p>Favourites</p>
  <button @click="clearFavourites()" type="button">Reset</button>
  </div>
</template>

<script>
import {eventBus} from "../main.js";

export default {
name: "favourites",
data(){
  return {
  favouriteAnimals: ["test"]
}
},
mounted(){
  eventBus.$on("select-fav", (animal) => {
      if (this.favouriteAnimals.length <= 3 && !this.favouriteAnimals.includes(animal))
      this.favouriteAnimals.push(animal)
      else if (this.favouriteAnimals.includes(animal))
      this.favouriteAnimals.splice(this.favouriteAnimals.indexOf(animal))
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
</style>
