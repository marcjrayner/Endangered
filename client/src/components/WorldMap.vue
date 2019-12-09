<template lang="html">
  <div id="world_map">
    <h1>My endangered species</h1>
    <ul>
      <li v-for="(continent, index) in continents" :key="index" :continent="continent"><button type="button" name="button" :class="continent.name" style="font-size: 3em; background: none; color: Blue; border: none;"><font-awesome-icon icon="paw"/></i></button></li>
    </ul>



<!-- <button type="button" name="button" class="button_paw" style="font-size: 3em; background: none; color: Tomato; border: none;"><i class="fas fa-paw icon-large"></i></button> -->

<!-- <button type="button" name="button" class="button_au" style="font-size: 3em; background: none; color: Blue; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_an" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_sa" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_oc" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_na" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_eu" style="font-size: 3em; background: none; color: blue; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_as" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button>

<button type="button" name="button" class="button_af" style="font-size: 3em; background: none; color: Tomato; border: none;"><font-awesome-icon icon="paw"/></i></button> --> --> -->

  </div>

</template>

<script>
export default {
  name: "world-map",
  props: ["continents"]
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
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
