<template>
  <div id="passport">
    <div id="right-page">
      <h3>{{animal.name}}</h3>
      <img :src="animal.image" :alt="animal.name">
      <p>{{animal.fun_fact}}</p>
    </div>
    <div id="left-page">
      <h3>{{animal.quiz_question}}</h3>
      <ul id="answers" v-for="answer in shuffle(animal.answers)">
        <li>{{answer}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Continent from "/Continent.vue";

export default {
  name: "passport",
  props: ["animal"],
  // data(){
  //   return{
  //     answers: shuffle(this.animal.answers)
  //   }
  // },
  methods: {
    shuffle(array){
      for( i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
  }
}
</script>

<style lang="css" scoped>
</style>
