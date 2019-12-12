<template lang="html">
  <section v-if="selectedAnimal" id="passport">

    <div class="trivia">

      <div class="left-page">
        <div>
          <img :src="selectedAnimal.image" :alt="selectedAnimal.name" class="recImg">
          <font-awesome-icon @click="selectFav" icon="heart" class="heart" :color="fav_heart" size="3x"/>
        </div>
        <h4>{{selectedAnimal.name}}</h4>

        <div class="fact">
          <h2>Fun Fact:</h2>
          <p>{{selectedAnimal.fun_fact}}</p>
          <h2>Conservation Status:</h2>
          <p>{{selectedAnimal.conservation_status}}</p>
        </div>

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

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

#passport{
  font-family: sans-serif;
  font-size: 18px;
}

.heart{
  padding: 20px;
  position: relative;
  top: -8px;
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
  grid-column: 1 / span 2;
  position: relative;
  top: -40px;
  left: 20px;
  font-size: 22px;
  width: 90%;
}

.quiz {
  height: 100%;
  margin: 0;
}

.trivia{
  border-radius: 5%;
  background-image: url("../assets/passport_page.jpeg");
  object-fit: fill;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  margin: auto;
  font-family: 'Josefin Sans', sans-serif;
}

.left-page{
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-right: 0px;

}

.right-page{
  display: grid;
  box-sizing: border-box;
  padding: 15px;
  width: 48%;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr 1fr;
  align-items: stretch;
  font-size: 20px;
  grid-gap: 0.75em;
  font-family: 'Josefin Sans', sans-serif;
}

.right-page h3{
  grid-column: 1 / span 2;
  text-align: bottom;
  margin-bottom: 0px;
  margin-top: 10%;
}

.right-page li{
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 3px;
  border: 2px solid;
  border-radius: 10px;
}

.recImg{
  height: 225px;
  width: 175px;
  object-fit: cover;
  position: relative;
  left: 20px;
  top: 50px;
  filter: drop-shadow(1px 2px 3px #808788);
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
