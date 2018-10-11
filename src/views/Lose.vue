<template>
    <div>
        <HelloWorld msg="BUMMER, YOU LOST"/>
        <router-link id="Back" to="/">Main Menu</router-link>
        <img id="Background" src="@/assets/PWhitePiece.png"/>
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Vue from 'vue';

export default Vue.extend({
  name: 'lose-screen',
  components: {
    HelloWorld,
  },
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
