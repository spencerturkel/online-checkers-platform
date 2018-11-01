<template>
  <div class="home">
    <HelloWorld msg="Welcome to Checkers"/>
    <sign-in @signedIn="signedIn" @signedOut="signedOut"></sign-in>
    <button type="button" v-if="ready" @click="startGame">Start Game</button>
    <router-link to="/account">Account</router-link>
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
    async startGame(): Promise<void> {
      const response = await this.$http.post('/game/start');

      if (response.status === 400) {
        this.$router.push('/game');
      } else {
        this.$router.push('/waiting');
      }
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
