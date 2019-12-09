<template>
  <div id="passport">
    <div id="right-page">
      <h3>{{animal.name}}</h3>
      <img :src="animal.image" :alt="animal.name">
      <p>{{animal.fun_fact}}</p>
    </div>
    <div id="left-page">
      <h3>{{animal.quiz_question}}</h3>
        <ul v-for="answer in shuffle(animal.answers)">
          <li><button @click="checkAnswer(answer)" :class="answer_class" type="button">{{answer}}</button></li>
        </ul>
        <p :class="answer_class">{{animal.answer.fact}}</p>
    </div>
  </div>
</template>

<script>
import Continent from "/Continent.vue";

export default {
  name: "passport",
  props: ["animal"],
  data(){
    return{
      // answers: shuffle(this.animal.answers)
      answer_class: "hidden"
    }
  },
  methods: {
    shuffle(array){
      for( i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    checkAnswer(answer){
      if(answer == this.animal.correct_answer){
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
