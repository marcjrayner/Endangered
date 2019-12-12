<template lang="html">
<div>
  <button class="myButton" @click="moreInfo(); isOpen = true;"  type="button">Biggest Threat</button>
  <div id="threat-window" v-if="biggestThreatObject && isOpen">
    <button @click="isOpen = false" type="button" name="button"><font-awesome-icon icon="times" size="2x"/></button>
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


.myButton {
  background-color:#274769;
	border-radius:15px;
	border:1px solid white;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:5px 20px;
	text-decoration:none;
	text-shadow:0px 0px 0px #2f6627;
}

.myButton:hover {
  cursor: pointer;
}

#threat-window {
    width: 400px;
    height: auto;
    margin: 0px;
    padding: 15px;
    background-color: #F5F7F7;
    border-radius: 10px;
    filter: drop-shadow(2px 2px 1px #AB9397);
    position: relative;
    top: -280px;
    left: 133px;
    z-index: 2;
    font-size: 25px;
    font-family: 'Josefin Sans', sans-serif;
}

#threat-window > button {
  position: absolute;
  left: 388px;

}
</style>
