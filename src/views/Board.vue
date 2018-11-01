<template>
    <div id="contain">
        <img src="@/assets/Playspace.png" id="Play">
    </div>
</template>

<style scoped>
/*Makes the image take up the whole screen*/
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

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
</style>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';

export default {
  name: 'boardSpace',
  components: {
    HelloWorld,
  },
};
</script>
