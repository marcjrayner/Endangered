<template lang="html">
  <div v-if='profile'>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class="modal">
            <h2>My Favourite Animals</h2>
          <!-- <img :src="animal.image" >   -->
          <ul id="favImg">
            <li v-if="animal"     v-for="animals in favouriteAnimals">
              {{ animal.image }}
            </li>
          </ul>
            <div class="button_class">
            <button type="button" name="Reset">Reset</button>
            <button type="button" name="top issue">Top Issue</button>
                </div>
          </div>
        </div>
      </div>
    </transition>
    <button @click="isOpen = !isOpen;" type="button" name="button">Reasearcher Profile</button>
  </div>

</template>

<script>
name: 'researcher-profile'
export default {
  props: ['profile'],
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style lang="css" scoped>

li {
  float: left;
}

.modal {
  width: 400px;
  height: 100px;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  position: absolute;
  left: 1480px;
  top: 5px;
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


</style>
