<template lang="html">
<div>
  <button @click="moreInfo()"  type="button">More Info</button>
  <div v-if="biggestThreatObject">
    {{biggestThreatObject.name}}
    <hr>
    {{biggestThreatObject.issue}}
  </div>
</div>
</template>

<script>
import {eventBus} from "../main.js";

export default {
  name: "biggest-threat",
  props: ["biggestThreatObject"],
  methods: {
    moreInfo() {
      eventBus.$emit("more-info")
    }
  },

}
</script>

<style lang="css" scoped>
</style>
