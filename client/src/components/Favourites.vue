<template lang="html">

  <div>
  <p>Favourites</p>

  <button @click="clearFavourites()" type="button">Reset</button>
  <button @click="moreInfo()"  type="button">More Info</button>
  </div>
</template>

<script>
import {eventBus} from "../main.js";

export default {
name: "favourites",
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
}
}
</script>

<style lang="css" scoped>
</style>
