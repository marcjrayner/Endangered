<template lang="html">
  <div id="world_map">
    <h1>My Endangered Wildlife</h1>
    <ul>
      <li v-for="(continent, index) in continents" :key="index" :continent="continent"><button type="button" v-on:click="handleClick" name="button" :class="continent.name" style="font-size: 3em; background: none; color: Blue; border: none;"><font-awesome-icon icon="paw"/></i></button></li>
    </ul>

  </div>

</template>

<script>
import ContinentDetail from './ContinentDetail.vue'
import ResearchProfile from './ResearchProfile.vue'
export default {
  name: "world-map",
  props: ["continents"],
  components: {
    'continent-detail': ContinentDetail,
    'research-profile': ResearchProfile
  },
  data() {
     return {
       profile: "false"
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
