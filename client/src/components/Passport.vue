
<template lang="html">
  <section v-if="selectedAnimal" id="passport">

    <div class="trivia">

      <div class="left-page">
        <img :src="selectedAnimal.image" width="300" :alt="selectedAnimal.name" class="recImg">

        <div class="heart">
          <font-awesome-icon @click="selectFav" icon="heart" :color="fav_heart" size="2x"/>
        </div>

        <h3>{{selectedAnimal.name}}</h3>
        <p>{{selectedAnimal.fun_fact}}</p>
      </div>
      <div class="right-page">
        <h3>{{selectedAnimal.quiz_question}}</h3>
        <ul class="quiz" v-for="answer in selectedAnimal.answers">
          <li @click="checkAnswer(answer)" :class="answer_class" type="button">{{answer}}</li>
        </ul>

      </div>
    </div>
  </section>
</template>

<script>
import ContinentDetail from "./ContinentDetail.vue";
import {eventBus} from "../main.js";

export default {
  name: "passport",
  props: ["selectedAnimal", "favouriteAnimals"],
  data(){
    return{
      answers: "",
      answer_class: ""
    }
  },
  computed: {
    fav_heart() { return this.isFavourited() }
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
      this.isFavourited();
    },
    isFavourited(){
      const favourited = (favElement) => favElement.name === this.selectedAnimal.name
      const heart = this.favouriteAnimals.some(favourited)
      if(heart){
       return "#FF879D"
      }
      else{
       return "#E5DEDF"
     }
    }
    }
  }

</script>

<style lang="css" scoped>

  .quiz {
    height: 100%;
    margin: 0;
  }

  .trivia {
    font-family: sans-serif;
    font-size: 20px;
    /* display: block; */
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  .heart{
    padding: 10px;
    cursor: pointer;
    position: relative;
    left: 14em;
    top: 3.2em;
    filter: drop-shadow(1px 1px 1px #AB9397);
  }
  .trivia{
    width: 100%;
    margin: auto;
    display: flex;
  }

  .left-page{
    width: 50%;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    padding-right: 15px;
  }

  .left-page p {
    padding: 5px;
  }

  .right-page{
    display: grid;
    box-sizing: border-box;
    padding: 15px;
    width: 50%;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr 1fr;
    align-items: stretch;
    font-size: 20px;
    grid-gap: 1em;
    font-family: 'Josefin Sans', sans-serif;
  }
  .right-page h3{
    grid-column: 1 / span 2;

  }
  .right-page li{
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 3px;
    border: 2px solid #A4B8C4;
    border-radius: 10px;
  }

  .recImg{
    height: 275px;
    width: 225px;
    object-fit: cover;
    position: relative;
    left: 0.5em;
    top: 1.25em;
    filter: drop-shadow(1px 1px 2px #4B545A);
  }

  ul {
    list-style: none;
    padding: 0;
  }

li:hover{
  border: 2px solid #4B545A;
  cursor: pointer;
}

</style>
