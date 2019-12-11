<template lang="html">
<<<<<<< HEAD
  <div v-if='profile'>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h2>My Favourite Animals</h2>
          <!-- <img :src="animal.image" >   -->
          <ul id="favImg">
            <li  v-for="animals in favouriteAnimals">
              {{ animal.image }}
            </li>
          </ul>
            <div class="button_class">
            <button type="button" name="Reset">Reset</button>
            <button type="button" name="top issue">Top Issue</button>
                </div>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;" type="button" name="button">Reasearcher Profile</button>
  </div>
=======
  <div>
  <p>Favourites</p>
>>>>>>> develop

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
