<template>
  <div class="home">
    <HelloWorld v-if="!ready" msg="Welcome to Checkers"/>

    <sign-in></sign-in>
    
    <b-container>
      <b-row>
          <b-col><b-button type="button"
              size="lg" variant="primary"
              v-if="ready" @click="startGame">Start Game</b-button></b-col>
      </b-row>
    
      <b-row>
        <b-col><b-button to="/account"
                size="lg" variant="primary"
                v-if="ready">Account</b-button></b-col>
      </b-row>

      <b-row>
        <b-col><b-button to="/board">Board</b-button></b-col>
      </b-row>
    </b-container>
    
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
  computed: {
    ready(): boolean {
      return this.$root.$data.user != null;
    },
  },
  methods: {
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
