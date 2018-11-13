<template>
  <div class="home">
    <h1>Welcome to Checkers</h1>
    <sign-in></sign-in>
    <b-container v-if="$user" class="center">
      <b-row v-if="!$user.isPremium">
        <b-col>
          <upgrade></upgrade>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-button to="/room" size="lg" variant="primary">Create A Game Room</b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-button to="/find" size="lg" variant="primary">Find A Game Room</b-button>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col>
          <b-button to="/account" size="lg" variant="primary">Account</b-button>
        </b-col>
      </b-row>
    </b-container>
    <img id="StartScreen" src="./assets/CheckersMainMenuGraphic.png" alt="Start Screen">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SignIn from '@/user-account/SignIn.vue';
import Upgrade from '@/user-account/Upgrade.vue';

/**
 * The default view, facilitating access to the rest of the app.
 */
export default Vue.extend({
  name: 'home',
  components: {
    SignIn,
    Upgrade,
  },
});
</script>

<style scoped>
body,
html {
  height: 100%;
}

h1 {
  text-align: center;
}

.row {
  margin-top: 1rem;
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
