<template lang="html">

  <div>
  <p>Favourites</p>

  <button @click="clearFavourites()" type="button">Reset</button>
  <biggest-threat></biggest-threat>
  </div>
</template>

<script>
import {eventBus} from "../main.js";
import BiggestThreat from "./BiggestThreat.vue"

export default {
name: "favourites",
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
}
}
</script>

<style lang="css" scoped>
</style>
