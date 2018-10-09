<template>
  <div class="home">
    <HelloWorld msg="Welcome to Checkers"/>
    <img id = "StartScreen" src = "../assets/CheckersMainMenuGraphic.png" alt = "Start Screen">
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
body,
html {
  height: 100%;
}

#StartScreen {
  height: 100%;
  width: 100%;

  position: fixed;

  left: 0px;
  top: 0px;

  z-index: -1;

  background: no-repeat center;
  background-size: cover;
}
</style>
