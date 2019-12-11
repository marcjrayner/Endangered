
<template lang="html">
  <div v-if="selectedAnimal"id="passport">

    <section class="trivia">

      <div class="left-page">
        <div>


        <img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="recImg">
        <font-awesome-icon @click="selectFav" icon="heart" class="heart" :color="fav_heart" size="3x"/>
</div>
          <h4>{{selectedAnimal.name}}</h4>


        <div class="fact">
          <h2>Fun Fact:</h2>
          <p>{{selectedAnimal.fun_fact}}</p>
        </div>


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

  #passport{
    font-family: sans-serif;
    font-size: 18px;
    /* background-image: url("../../public/passport_page.jpeg"); */
    /* background-color: green; */
  }

  .heart{
    padding: 20px;
    position: relative;
    top: 0px;
    left: 150px;
  }

  .heart:hover {
    cursor: pointer;
  }

  h4  {
    position: relative;
    top: 50px;
    left: -30px;
    text-align: center;
    font-size: 30px;
  }

.fact {
  grid-column: 1 ;
  position: relative;
  top: 20px;
  left: 20px;
  font-size: 22px
}

  .trivia{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: blue;
    border-radius: 5%;
    background-image: url("../../public/passport_page.jpeg");
    object-fit: fill;
    background-size: 100%;
    background-repeat: no-repeat;

  }

 .left-page{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

  }

 .right-page{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: none;
    font-size: 20px;
  }

  .right-page h3{
    grid-column: 1 / span 2;
    /* border: 2px solid black;
    border-radius: 5%; */
    height: 160px;
    width: 330px;
    text-align: center;
    position: relative;
    left: 18%;
    top: 15%;
  }

 .right-page li{
    /* padding: 3px;
    margin: 3px;
    border: 2px solid; */
    height: 160px;
    width: 150px;
    border-radius: 5%;
    text-align: center;
    position: relative;
    left: 40px;
    top: -50px;
  }

  .recImg{
    height: 225px;
    width: 175px;
    border-style: solid;
    border-color: black;
    object-fit: cover;
    position: relative;
    left: 20px;
    top: 50px;
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
  font-size: 24px;
  cursor: pointer;
}

</style>
