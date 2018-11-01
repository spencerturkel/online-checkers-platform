<template>
    <div>
        <HelloWorld msg="Account"/>
        <img id="StartScreen" src="../assets/Checkers_Account(Updated).png" alt="Start Screen">
        <h2 id="win">0</h2>
        <h2 id="lose">0</h2>
        <h2 id="games">0</h2>
    </div>
</template>

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

#win {
  position: absolute;
}
</style>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

import Vue from 'vue';

export default Vue.extend({
  name: 'account',
  components: {
    HelloWorld,
  },
});
</script>
