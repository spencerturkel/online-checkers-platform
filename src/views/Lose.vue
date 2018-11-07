<template>
  <div>
    <h1>BUMMER, YOU LOST!</h1>
    <router-link id="Back" to="/">Main Menu</router-link>
    <img id="Background" src="@/assets/PWhitePiece.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Lose',
});
</script>

<style scoped>
body,
html {
  /*Ensures that the body/html is used as the container...I think*/
  height: 100%;
}

#Back {
  position: absolute;
  top: 80%;
  text-align: center;
  margin: auto;
}

/*Makes the image take up the whole screen*/
#Background {
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
