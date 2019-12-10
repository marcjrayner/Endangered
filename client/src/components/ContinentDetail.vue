<template lang="html">
  <div v-if='continent'>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h1>{{this.continent.name}}</h1>
            <ul v-for="animal in this.continent.animals">
              <img :src="animal.image" height="90" width="90" class="circularImg" >
              <!-- <li @click="selectAnimal(animal)">{{animal.name}}</li> -->
            </ul>
            <passport :selectedAnimal="selectedAnimal"></passport>

          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;" type="button" name="button" :class="continent.name" style="font-size: 3em; background: none; color: Blue; border: none;"><font-awesome-icon icon="paw"/></i></button>
    </button>
  </div>
</template>

<script>
import Passport from "./Passport.vue"

export default {
  name: 'continent-detail',
  props: ['continent'],
  data() {
    return {
      isOpen: false,
      selectedAnimal: ""
    }
  },
  methods: {
    selectAnimal(animal){
      this.selectedAnimal = animal;
    }
  },
  components: {
    "passport": Passport
  }
}
</script>

<style lang="css" scoped>




.circularImg{

  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
  display:block;
  float: left;
  margin: 20px;
}

.modal {
  width: 700px;
  height: 400;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
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
  /* background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px; */
  position: absolute;
  left: 600px;
  top: 600px;

  }
  .NorthAmerica {
    /* background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px; */
    position: absolute;
    left: 400px;
    top: 300px;
    }

  .Europe {
      /* background-color: red;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px; */
      position: absolute;
      left: 950px;
      top: 300px;
      }

    .Oceans {
        /* background-color: red;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px; */
        position: absolute;
        left: 150px;
        top: 700px;
        }

        .Africa {
          /* background-color: red;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px; */
          position: absolute;
          left: 1000px;
          top: 500px;
          }

          .Asia {
            /* background-color: red;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px; */
            position: absolute;
            left: 1300px;
            top: 300px;
            }
            .Antarctica {
              /* background-color: red;
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px; */
              position: absolute;
              left: 1100px;
              top: 850px;
              }

              .Australia {
                /* background-color: red;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px; */
                position: absolute;
                left: 1600px;
                top: 620px;
                }



</style>
