<template lang="html">
  <div v-if='continent'>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1>{{this.continent.display_name}}</h1>
              <ul v-for="animal in this.continent.animals">
                <img @click="selectAnimal(animal)" :src="animal.image" height="90" width="90" class="circularImg" >
              </ul>
            <div v-if="selectedAnimal !== ''">
              <passport :selectedAnimal="selectedAnimal" :favouriteAnimals="favouriteAnimals"></passport>
              <div v-if="answer_class === 'correct'">
                <font-awesome-icon icon="check-circle" color="green"/>
                <animal-fact :selectedAnimal="selectedAnimal"></animal-fact>
              </div>
              <div v-if="answer_class === 'incorrect'">
                <font-awesome-icon icon="times-circle" color="red"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div >
      <button @click="isOpen = !isOpen, noSelection()" type="button" name="button" :class="continent.name" style="font-size: 3em; background: none; color: Blue; border: none;"><font-awesome-icon icon="paw" class="pawH"/></i></button>
      </button>
    </div>
</div>
</template>

<script>
import Passport from "./Passport.vue"
import AnimalFact from "./AnimalFact.vue"
import {eventBus} from "../main.js"

export default {
  name: 'continent-detail',
  props: ['continent', 'favouriteAnimals'],
  data() {
    return {
      isOpen: false,
      selectedAnimal: "",
      answer_class: "hidden"
    }
  },
  methods: {
    shuffle(array){
      for( let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    selectAnimal(animal){
      this.answer_class = "hidden";
      this.selectedAnimal = animal;
      this.shuffle(animal.answers)
    },
    noSelection(){
        this.answer_class = null;
        this.selectedAnimal = ""
      }
    },
    mounted(){
      eventBus.$on("check-answer", answer => {
      this.answer_class = answer
    })
    },
    components: {
    "passport": Passport,
    "animal-fact": AnimalFact
    }
}
</script>

<style lang="css" scoped>



.pawH:hover {
  background-color: yellow;
  cursor: pointer;
}

.circularImg{

  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  display:block;
  float: left;
  margin: 10px;
  padding-left: 10px;
  object-fit: cover;
}

.modal {
  width: 700px;
  height: 400;
  margin: 0px auto;
  padding: 20px;
  background-color: #FFFDD1;
  border-radius: 2px;
  border-style: solid;
  border-color: #FFFBF3;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  /* font-family: Helvetica, Arial, sans-serif; */
}
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}
.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 10px;
  border-radius: 10px;
  margin-top: 5px;
  background-color: dodgerblue;
  color: white;
  font-size: 1.1rem;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}

.SouthAmerica {
  position: absolute;
  left: 600px;
  top: 600px;
}

.NorthAmerica {
  position: absolute;
  left: 400px;
  top: 300px;
}

.Europe {
  position: absolute;
  left: 950px;
  top: 300px;
}

.Oceans {
  position: absolute;
  left: 150px;
  top: 700px;
}

.Africa {
  position: absolute;
  left: 1000px;
  top: 500px;
}

.Asia {
  position: absolute;
  left: 1300px;
  top: 300px;
}

.Antarctica {
  position: absolute;
  left: 1100px;
  top: 850px;
}

.Australia {
  position: absolute;
  left: 1600px;
  top: 620px;
}



</style>
