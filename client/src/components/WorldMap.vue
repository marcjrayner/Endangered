<template lang="html">
  <div id="world_map">
    <h1><b>My Endangered Wildlife</b></h1>
    <favourites :biggestThreatObject="biggestThreatObject" :favouriteAnimals="favouriteAnimals"></favourites>
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
    props: ["continents", "threatObjects"],
    components: {
      'continent-detail': ContinentDetail,
      'favourites': Favourites
    },
    data() {
      return {
        favouriteAnimals: [],
        threats: [],
        biggestThreat: "",
        biggestThreatObject: null
      }
    },
    mounted(){
      eventBus.$on("select-fav", (animal) => {
        if (this.favouriteAnimals.length < 3 && !this.favouriteAnimals.includes(animal))
        this.favouriteAnimals.push(animal)
        else if (this.favouriteAnimals.includes(animal))
        this.favouriteAnimals.splice(this.favouriteAnimals.indexOf(animal),1)
      })

      eventBus.$on("clear-animals", () => {
        this.favouriteAnimals = []
        this.threats = []
      })

      eventBus.$on("more-info", () => {
        this.biggestThreats()
      })

    },
    methods: {
      clearFavourites() {
        this.favouriteAnimals = []
      },
      biggestThreats(){
        this.threats = []
        this.favouriteAnimals.forEach(animal => this.threats.push(animal.threats))
        const newArray = [].concat.apply([], this.threats)
        this.biggestThreat = this.findThreat(newArray)
        this.findThreatObject(this.biggestThreat);
      },
      findThreat(array){
        return array.sort((a,b) =>
        array.filter(v => v===a).length
        - array.filter(v => v===b).length
      ).pop();
    },
    findThreatObject(threat) {
      this.biggestThreatObject = this.threatObjects.find(threatObject => threatObject.name === threat)
    }
  }
}

</script>

<style lang="css" scoped>

h1{
  font-family: 'Josefin Sans', sans-serif;
  font-size: 45px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #274769;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}

ul {
  list-style: none;
}
</style>
