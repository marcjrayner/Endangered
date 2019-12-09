<template>
  <div id="passport">
    <div id="right-page">
      <h3>{{selectedAnimal.name}}</h3>
      <img :src="selectedAnimal.image" width="300" :alt="selectedAnimal.name">
      <p>{{selectedAnimal.fun_fact}}</p>
    </div>
    <div id="left-page">
      <h3>{{selectedAnimal.quiz_question}}</h3>
        <ul v-for="answer in selectedAnimal.answers">
          <li @click="checkAnswer(answer)" :class="answer_class" type="button">{{answer}}</li>
        </ul>
        <p :class="answer_class">{{selectedAnimal.answer_fact}}</p>
    </div>
  </div>
</template>

<script>
import ContinentDetail from "./ContinentDetail.vue";

export default {
  name: "passport",
  props: ["selectedAnimal"],
  data(){
    return{
      // answers: shuffle(this.animal.answers),

      answer_class: "hidden",
    }
  },
  methods: {
    // shuffle(array){
    //   for( i = array.length - 1; i > 0; i--){
    //     const j = Math.floor(Math.random() * i)
    //     const temp = array[i]
    //     array[i] = array[j]
    //     array[j] = temp
    //   }
    //   return array
    // },
    checkAnswer(answer){
      if(answer == selectedAnimal.correct_answer){
        this.answer_class = correct
      }
      else {
        this.answer_class = incorrect
      }
    }
  }
}
</script>

<style lang="css" scoped>

  #passport {
    display: grid;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 5px;
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

  li.hidden {
    border: 2px solid black
  }

  li.correct {
    border: 2px solid green
  }

  li.incorrect {
    border: 2px solid red
  }
</style>
