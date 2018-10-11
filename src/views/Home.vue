<template>
  <div class="home">
    <HelloWorld msg="Welcome to Checkers"/>
    <sign-in @signedIn="signedIn" @signedOut="signedOut"></sign-in>
    <router-link v-if="ready" id="Start" class="Buttons" to="/waiting">Start</router-link>
    <img id="StartScreen" src="../assets/CheckersMainMenuGraphic.png" alt="Start Screen">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SignIn from '@/components/account/SignIn.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    SignIn,
  },
  data: () => ({ ready: false }),
  methods: {
    signedIn(): void {
      this.ready = true;
    },
    signedOut(): void {
      this.ready = false;
    },
  },
});
</script>

<style scoped>
body,
html {
  height: 100%;
}
/*Gets the main menu screen to take up the screen*/
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
