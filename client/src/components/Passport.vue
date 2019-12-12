
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


/* .quiz {
height: 100%;
margin: 0;
}

.trivia {
font-family: sans-serif;
font-size: 20px; */
/* display: block; */
/* margin-block-start: 1em;
margin-block-end: 1em;
}

.heart{
padding: 10px;
cursor: pointer;
position: relative;
left: 14em;
top: 3.2em;
filter: drop-shadow(1px 1px 1px #AB9397); */

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');

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
  grid-column: 1 / span 2;
  position: relative;
  top: 20px;
  left: 20px;
  font-size: 22px;
  width: 90%;
}

.quiz {
  height: 100%;
  margin: 0;
}

.trivia{
  /* display: block; */
  /* grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr; */
  /* width: 100%;
  height: 100%;
  padding: 5px; */
  /* background-color: blue; */
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
  /* height: 100%; */
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
  grid-column-gap: 0.5em;
  font-family: 'Josefin Sans', sans-serif;
  /* z-index: 4; */
  /* background-color: dodgerblue; */

}

.right-page h3{
  grid-column: 1 / span 2;
  text-align: bottom;
  margin-bottom: 0px;
  margin-top: 10%;
  /* border: 2px solid black;
  border-radius: 5%; */
  /* height: 160px;
  width: 330px;
  text-align: center;
  position: relative;
  left: 18%;
  top: 15%; */
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

  /* position: relative; */
  /* left: 40px;
  top: -50px; */
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

li:hover{
  border: 2px solid #4B545A;
  cursor: pointer;
}

</style>
