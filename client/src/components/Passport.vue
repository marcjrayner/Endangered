
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
       return "pink"
      }
      else{
       return "black"
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
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* background-image: url("../../public/passport_page.jpeg"); */
  }

  .heart{
    padding: 10px;
    cursor: pointer;
  }
  .trivia{
    width: 100%;
    margin: auto;
    display: flex;
  }

  .left-page{
    width: 50%;
    box-sizing: border-box;
    /* border-right: solid; */
    font-family: 'Josefin Sans', sans-serif;
  }

  .right-page{
    display: grid;
    box-sizing: border-box;
    padding: 10px;
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
    border: 4px solid black;
  }

  .recImg{
    height: 225px;
    width: 175px;
    /* border-style: solid; */
    /* border-color: blue; */
    object-fit: cover;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  p {
    /* display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
  }


li:hover{
  border: 4px solid grey;
  cursor: pointer;
}

</style>
