<template>
  <div class="home">
    <h1>Welcome to Checkers</h1>
    <sign-in></sign-in>
    <b-container v-if="!$root.$data.user.isGuest">
      <b-row v-if="!$root.$data.user.isPremium">
        <b-col>
          <upgrade></upgrade>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button type="button" size="lg" variant="primary" @click="startGame">Start Game</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button to="/account" size="lg" variant="primary">Account</b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-button to="/board" size="lg" variant="primary">Board</b-button>
        </b-col>
      </b-row>
    </b-container>

    <img id="StartScreen" src="../assets/CheckersMainMenuGraphic.png" alt="Start Screen">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SignIn from '@/components/account/SignIn.vue';
import Upgrade from '@/components/account/Upgrade.vue';

export default Vue.extend({
  name: 'home',
  components: {
    SignIn,
    Upgrade,
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
