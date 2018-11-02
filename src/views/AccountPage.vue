<template>
    <div>
        <h1 v-if="$user">{{$user.name}}</h1>
        <img id="StartScreen" src="../assets/CheckersMainMenuGraphic.png" alt="Start Screen">
        <div id="stats">
          <b-container> 
            <b-row>
              <b-col cols="5" id="wins">{{wins}}</b-col>
              <b-col cols="2" id="losses">{{losses}}</b-col>
              <b-col cols="2" id ="games">{{games}}</b-col>
            </b-row>
          </b-container>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'account',
  // Mounted as soon as component gets on the page
  async mounted(): Promise<void> {
    // await waits for the returned promis of get
    const stats = await this.$http.get('/user/stats');
    if (stats.status === 200) {
      this.wins = stats.data.wins;
      this.losses = stats.data.wins;
      this.games = stats.data.games;
    }
  },

  data: () => ({
    wins: 0,
    losses: 0,
    games: 0,
  }),
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
  position: absolute;
  width: 75%;
  top: 25%;
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
