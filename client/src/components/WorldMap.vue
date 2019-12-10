<template lang="html">
  <div id="world_map">
    <h1>My endangered species</h1>
    <ul>
      <continent-detail v-for="(continent, index) in continents" :key="index" :continent="continent"></continent-detail>
  
    </ul>

  </div>

</template>

<script>
import ContinentDetail from './ContinentDetail.vue'
export default {
  name: "world-map",
  props: ["continents"],
  components: {
    'continent-detail': ContinentDetail
  }
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
