<template>
  <div>
    <img id="StartScreen" src="../assets/CheckersMainMenuGraphic.png" alt="Start Screen">
    <div id="stats">
      <h1>Account</h1>
      <h1 v-if="$root.$data.user">{{$root.$data.user.name}}</h1>
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
        <b-row v-if="!$root.$data.user.isPremium">
          <b-col>
            <b-button variant="warning">Upgrade</b-button>
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

export default Vue.extend({
  computed: {
    games(): number {
      return this.wins + this.losses;
    },
  },
  data: () => ({
    wins: 0,
    losses: 0,
  }),
  async mounted(): Promise<void> {
    const stats = await this.$http.get('/user');

    if (stats.status === 200) {
      this.wins = stats.data.wins;
      this.losses = stats.data.wins;
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
