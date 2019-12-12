<template lang="html">
<div>
  <button class="myButton" @click="moreInfo(); isOpen = true;"  type="button">Biggest Threat</button>
  <div id="threat-window" v-if="biggestThreatObject && isOpen">
    <button @click="isOpen = false" type="button" name="button">Close</button>
    {{biggestThreatObject.displayName}}
    <hr>
    {{biggestThreatObject.issue}}
    <hr>
    <p>What can I do to help?</p>
    {{biggestThreatObject.action}}
    <hr>
    {{biggestThreatObject.link}}
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


.myButton {
	background-color:#FC766AFF;
	border-radius:15px;
	border:2px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:5px 20px;
	text-decoration:none;
	text-shadow:0px 0px 0px #2f6627;
}

#threat-window {
    width: 300px;
    height: 200px;
    margin: 0px;
    padding: 20px;
    background-color: #FFFDD1;
    border-radius: 2px;
    border-style: solid;
    border-color: #FFFBF3;
    position: absolute;
    top: -280px;
    left: 133px;
}
</style>
