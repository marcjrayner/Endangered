<template lang="html">
  <div id="cont-animal-list-container">

    <continent v-for="()"
    <h2></h2>
    <div id="continent-animal-list">
      <ul>
        <animal v-for="(animal, index) in animals.continent" :animal='animal' :key='index'>
          <button type="button" name="button">{{animal.image}}</button>

    <h2>Continent Animals</h2>
    <div id="continent-animal-list">
      <ul>
        <animal v-for="(animal, index) in animals.continent" :animal='animal' :key='index'>
          {{animal.image}}

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
