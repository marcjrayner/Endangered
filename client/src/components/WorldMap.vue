<template lang="html">
  <div id="world_map">
    <h1>My Endangered Wildlife</h1>
    <research-profile :profile="profile"></research-profile>
    <ul>
      <continent-detail v-for="(continent, index) in continents" :key="index" :continent="continent"></continent-detail>
    </ul>

  </div>

</template>

<script>
import ContinentDetail from './ContinentDetail.vue'
import ResearchProfile from './Favourites.vue'
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
