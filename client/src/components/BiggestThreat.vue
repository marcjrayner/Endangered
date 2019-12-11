<template lang="html">
<div>
  <button @click="moreInfo()"  type="button">More Info</button>
</div>
</template>

<script>
import {eventBus} from "../main.js";

export default {
  name: "biggest-threat"
  props: ["continents", "threatObjects"],
  methods: {
    moreInfo() {
      eventBus.$emit("more-info")
    }
  },

}
</script>

<style lang="css" scoped>
</style>
