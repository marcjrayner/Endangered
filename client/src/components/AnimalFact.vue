<template lang="html">

  <p>{{selectedAnimal.answer_fact}}</p>

</template>

<script>

export default {
  name: "animal-fact",
  props: ["selectedAnimal"]
}
</script>

<style lang="css" scoped>

p{
  font-family: sans-serif;
  font-size: 20px;
}

</style>
