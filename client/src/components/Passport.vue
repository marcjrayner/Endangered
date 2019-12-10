<template lang="html">
  <div id="passport">
    <section class="trivia">

      <div class="left-page">
        <img :src="selectedAnimal.image" width="300" :alt="selectedAnimal.name" class="recImg">
        <font-awesome-icon @click="selectFav" icon="heart" :color="fav_heart" size="2x" class="heart"/>
        <h3>{{selectedAnimal.name}}</h3>
        <p>{{selectedAnimal.fun_fact}}</p>
      </div>
      <div class="right-page">
        <h3>{{selectedAnimal.quiz_question}}</h3>
        <ul id="quiz" v-for="answer in selectedAnimal.answers">
          <li @click="checkAnswer(answer)" :class="answer_class" type="button">{{answer}}</li>
        </ul>

      </div>
    </section>
  </div>
</template>

<script>
import ContinentDetail from "./ContinentDetail.vue";
import {eventBus} from "../main.js";

export default {
  name: "passport",
  props: ["selectedAnimal", "favAnimals"],
  data(){
    return{
      answers: "",
      answer_class: ""
    }
  },
  methods: {

    checkAnswer(answer){
      let answer_class = "";
      if(answer == this.selectedAnimal.correct_answer){
        answer_class = "correct"
      }
      else {
        answer_class = "incorrect"
      }
      eventBus.$emit("check-answer", answer_class)
    },
    selectFav(){
      eventBus.$emit("select-fav", this.selectedAnimal)
    }
  }
}
</script>

<style lang="css" scoped>

  #passport{
    font-family: sans-serif;
    font-size: 20px;
    /* background-image: url("../../public/passport_page.jpeg"); */
  }

  .heart{
    padding: 10px;
  }
  .trivia{
    width: 90%;
    margin: auto;
    padding: 10px;
  }

  .left-page{
    width: 50%;
    float: left;
    border-right: solid;
  }

  .right-page{
    float: right;
    display: grid;
    padding: 10px;
    width: 45%;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr 1fr;
    align-items: stretch;
    font-size: 20px;
  }
  .right-page h3{
    grid-column: 1 / span 2;

  }
  .right-page li{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    padding: 5px;
    margin: 5px;
    border: 4px solid black;
  }

  .recImg{
    height: 225px;
    width: 175px;
    border-style: solid;
    border-color: blue;
    object-fit: cover;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  p.hidden {
    visibility: hidden;
  }

  p.correct {
    visibility: visible;
  }

li:hover{
  border: 4px solid grey;
}

</style>
