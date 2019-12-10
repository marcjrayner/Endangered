<template>
  <div id="passport">

    <div id="right-page">
      <h3>{{selectedAnimal.name}}</h3>
      <img :src="selectedAnimal.image" width="300" :alt="selectedAnimal.name">
      <p>{{selectedAnimal.fun_fact}}</p>
    </div>

    <div id="left-page">
      <h3>{{selectedAnimal.quiz_question}}</h3>
      <ul id="quiz" v-for="answer in selectedAnimal.answers">
        <li @click="checkAnswer(answer)" type="button"> {{answer}}</li>
      </ul>

      <!-- <div v-if="answer_class === 'correct'" class="check">
        <font-awesome-icon icon="check-circle" color="green"/>
      </div>
      <div v-if="answer_class === 'incorrect'" class="check">
        <font-awesome-icon icon="times-circle" color="red"/>
      </div> -->

      <!-- <p v-if="answer_class === 'correct'">{{selectedAnimal.answer_fact}}</p> -->
    </div>
  </div>
</template>

<script>
import ContinentDetail from "./ContinentDetail.vue";
import {eventBus} from "../main.js";

export default {
  name: "passport",
  props: ["selectedAnimal"],
  data(){
    return{
      answers: ""
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
    }
  }
}
</script>

<style lang="css" scoped>

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
  border: 5px solid black
}

p.hidden {
  visibility: hidden;
}

p.correct {
  visibility: visible;
}

p.incorrect {
  visibility: visible;
}


/* li.correct {
border: 5px solid green
}

li.incorrect {
border: 5px solid red
} */
</style>
