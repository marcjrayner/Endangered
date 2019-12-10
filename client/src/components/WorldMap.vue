<template lang="html">
  <div id="world_map">
    <h1>My endangered species</h1>
    <research-profile :profile="profile"></research-profile>
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
ul {
  list-style: none;
}
</style>
