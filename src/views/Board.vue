<template>
    <div id="contain">
        <img src="@/assets/Playspace.png" id="Play">

        <canvas id="myCanvas"></canvas>
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

canvas {
  position: absolute;
  overflow: hidden;

  width: 63%;
  height: 100%;
  top: 0;
  left: 19%;

  border: 1px solid red;
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

window.onload = () => {
  const canvas = document.getElementById('myCanvas');

  const c = canvas.getContext('2d');
};
</script>
