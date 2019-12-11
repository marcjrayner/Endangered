<template lang="html">
<div>
  <button @click="moreInfo(); isOpen = true;"  type="button">More Info</button>
  <div id="threat-window" v-if="biggestThreatObject && isOpen">
    <button @click="isOpen = false" type="button" name="button">Close</button>
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
  data() {
    return {
        isOpen: true,
    }
  },
  methods: {
    moreInfo() {
      eventBus.$emit("more-info")
    }
  },

}
</script>

<style lang="css" scoped>
#threat-window {
    width: 300px;
    height: 500px;
    margin: 0px;
    padding: 20px;
    background-color: #FFFDD1;
    border-radius: 2px;
    border-style: solid;
    border-color: #FFFBF3;
    position: inherit;
}
</style>
