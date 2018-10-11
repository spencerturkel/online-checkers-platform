<template>
<div>
    <!-- The below code sets the waiting screen as well as informs that we are waiting for a player
        currently there are buttons that will allow us to proceed and return to the main screen-->
    <img src="@/assets/Playspace.png" alt="Waiting Screen" id="Play"/>
    <div id="container">
        <HelloWorld msg="Waiting for Opponent" id ="HelloWorld"/>
    </div>

     <router-link id="continue" to='/game'>Proceed</router-link> |
     <router-link id="goBack" to='/'>Back</router-link>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import { delay } from '../util';

export default Vue.extend({
  // Imports waiting vue
  name: 'waiting',
  components: {
    HelloWorld,
  },
  async mounted() {
    while (true) {
      const result = await this.$http.get('/game/waiting');

      if (result.status === 200) {
        this.$router.push('/game');
        return;
      }

      await delay(200 /* milliseconds */);
    }
  },
});
</script>

<style scoped>
body,
html {
  /*Ensures that the body/html is used as the container...I think*/
  height: 100%;
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

/*Creates that black bar over the background*/
#container {
  width: 100%;
  height: 10%;
  background-color: black;
}

/*Edits text...for some reason needed to be an id or a class, wouldn't let me edit 
  HelloWorld tag*/
#HelloWorld {
  color: white;
  text-align: center;
}

/*Last Two things just let the buttons stand out*/
#continue {
  position: absolute;
  top: 90%;
  color: green;
}

#goBack {
  position: absolute;
  top: 95%;
  color: red;
}
</style>
