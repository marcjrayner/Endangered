<template>
  <div v-if="selectedAnimal"id="passport">
    <section class="trivia">

      <div class="right-page">
        <img :src="selectedAnimal.image" width="300" :alt="selectedAnimal.name" class="recImg">
        <font-awesome-icon @click="selectFav" icon="heart" :color="fav_heart" size="2x"/>
        <h3>{{selectedAnimal.name}}</h3>
        <p>{{selectedAnimal.fun_fact}}</p>
      </div>
      <div class="left-page">
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
      answer_class: "",
      fav_heart: "black"
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
      this.isFavourited();
      eventBus.$emit("select-fav", this.selectedAnimal)
    },
    isFavourited(){
      const favourited = (element) => element.name === this.selectedAnimal.name
      const heart = this.favouriteAnimals.some(favourited)
      if(heart){
        this.fav_heart = "pink"
      }
      else{
        this.fav_heart = "black"
      }
    }
    }
  }

</script>

<style lang="css" scoped>

/* .right-page{
  position: fixed;
    bottom: 500;
    right: 70;
    width: 300px;
    border: 3px solid #73AD21;

} */

/* .left-page{
  position: right;
  right: 30px;
  border: 3px solid #73AD21;

} */
  .trivia{
    width: 80%;
    margin: auto;
    padding: 10px;
  }

  .right-page{
    width: 50%;
    float: left;
    border-right: solid;
  }

  .left-page{
    padding: 10px;
    width: 50%;
    margin-left: 50%;
  }

  .recImg{
    height: 150px;
    width: 100px;
    border-style: solid;
    border-color: blue;
  }

  #passport {
    /* display: grid; */
  }


  ul {
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr;
  }

  li {
    padding: 5px;
    margin: 5px;
  }

  p.hidden {
    visibility: hidden;
  }

  p.correct {
    visibility: visible;
  }


ul {
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
}

li {
  padding: 5px;
  margin: 5px;
  border: 5px solid black
}

</style>
