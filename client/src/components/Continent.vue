<template lang="html">
  <div id="cont-animal-list-container">
<<<<<<< HEAD
    <continent v-for="()"
    <h2></h2>
    <div id="continent-animal-list">
      <ul>
        <animal v-for="(animal, index) in animals.continent" :animal='animal' :key='index'>
          <button type="button" name="button">{{animal.image}}</button>
=======
    <h2>Continent Animals</h2>
    <div id="continent-animal-list">
      <ul>
        <animal v-for="(animal, index) in animals.continent" :animal='animal' :key='index'>
          {{animal.image}}
>>>>>>> 33d64f1195276210ba57473a3c077c5ade04c0e7
        </animal>
      </ul>
    </div>
  </div>
</template>

<script>
import Animal from "./Animal.vue"

export default {
  name: "continent-animal-list",
  props: ["animals"],
  components: {
    "animal": Animal
  }
}
</script>

<style lang="css" scoped>
</style>
