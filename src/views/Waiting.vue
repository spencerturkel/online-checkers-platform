<template>
<div>
    <!-- The below code sets the waiting screen as well as informs that we are waiting for a player
        currently there are buttons that will allow us to proceed and return to the main screen-->
    <img src="@/assets/Playspace.png" alt="Waiting Screen" id="Play"/>
      
      <div class="contain">
        <h1>Waiting Room</h1>
      </div>

    <b-container class="col-md-4 col-md-offset-4">
      <b-row>
          <b-col>
            <b-form ref="form" 
              inline 
              novalidate 
              :validated="validated">
                <b-form-input class="mx-auto" 
                  placeholder="Your friend's email" 
                  required 
                  v-model="id"></b-form-input>
                <b-button variant="primary" 
                  class="mx-auto" 
                  @click="sendEmail()">Send Invite</b-button>
            </b-form>
          </b-col>
        </b-row>

        <b-row>
          &nbsp;
        </b-row>

        <b-row>
          <b-col>
            <b-button variant="primary" @click="publish()">Publish</b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-button v-if="!this.privateGame" variant="primary" @click="privatize()">Privatize</b-button>
            <b-button v-else variant="primary" @click="privatize()">Publicize</b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
              <b-button to="/" variant="danger">Main Menu</b-button>
          </b-col>
        </b-row>    
    </b-container>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import { delay } from '../util';

export default Vue.extend({
  data: () => ({ alive: true, privateGame: false }),
  beforeDestroy() {
    this.alive = false;
  },
  async mounted() {
    while (this.alive) {
      const result = await this.$http.get('/game/waiting');

      if (result.status === 200) {
        this.$router.push({
          path: '/game',
          query: { opponent: result.data.opponent },
        });
        return;
      }

      await delay(200 /* milliseconds */);
    }
  },

  methods: {
    sendEmail() {
      console.log('This will send an email');
      return;
    },

    publish() {
      console.log('This will publish the game');
      return;
    },

    privatize() {
      this.privateGame = !this.privateGame;
      if (this.privateGame) {
        console.log('This game is private');
      } else {
        console.log('This game is public');
      }
    },
  },
});
</script>

<style scoped>
body,
html {
  /*Ensures that the body/html is used as the container...I think*/
  height: 100%;
}

/*Creates that black bar over the background*/
#container {
  width: 100%;
  height: 10%;
  background-color: black;
}

/*Makes the image take up the whole screen*/
#Play {
  height: 100%;
  width: 100%;

  position: fixed;

  left: 0px;
  top: 0px;

  z-index: -1;

  background: no-repeat center;
  background-size: cover;
}

.contain {
  width: 100%;
  background-color: blue;
}

h1 {
  color: white;
  vertical-align: middle;
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
