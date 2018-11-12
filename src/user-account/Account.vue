<template>
  <div>
    <img id="StartScreen" src="../assets/CheckersMainMenuGraphic.png" alt="Start Screen">
    <div id="stats">
      <h1>Account
        <b-badge v-if="user.isPremium" pill variant="success">Premium</b-badge>
      </h1>
      <h1>{{user.name}}</h1>
      <b-container>
        <b-row>
          <b-col cols="5" id="wins">Wins</b-col>
          <b-col cols="2" id="losses">Losses</b-col>
          <b-col cols="2" id="games">Games</b-col>
        </b-row>
        <b-row>
          <b-col cols="5" id="wins">{{wins}}</b-col>
          <b-col cols="2" id="losses">{{losses}}</b-col>
          <b-col cols="2" id="games">{{games}}</b-col>
        </b-row>
        <b-row v-if="!user.isGuest && !user.isPremium">
          <b-col>
            <upgrade></upgrade>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button variant="danger" to="/">Main Menu</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { User } from '../user';
import Upgrade from './Upgrade.vue';

/**
 * Displays the user's premium status and their statistics.
 */
export default Vue.extend({
  name: 'Account',
  components: {
    Upgrade,
  },
  computed: {
    games(): number {
      return this.wins + this.losses;
    },
    user(): User {
      return this.$root.$data.user;
    },
  },
  data: () => ({
    wins: 0,
    losses: 0,
  }),
  async created(): Promise<void> {
    const { data, status } = await this.$http.get('/user');

    if (status === 200) {
      this.wins = data.wins;
      this.losses = data.losses;
    } else if (status === 403) {
      this.$router.replace('/');
    } else {
      // TODO: show error
    }
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

#stats {
  position: fixed;
  height: 45%;
  width: 75%;

  left: 12.5%;
  top: 25%;
  background: no-repeat center white;
  border: 3px solid black;
}

#wins {
  text-align: right;
}

#losses {
  text-align: center;
}

#games {
  text-align: center;
}
</style>
