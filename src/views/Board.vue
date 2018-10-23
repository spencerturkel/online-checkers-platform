<template>
    <div>
        <img src="@/assets/Playspace.png" id="Play" ondrop="drop(event)" ondragover="allowDrop(event)">
                
        <div draggable="true" ondragstart="drag(event)" class="piece">
            <img src="@/assets/PWhitePiece.png" class="Wpiece">
        </div>
    </div>
</template>

<style scoped>
/*Makes the image take up the whole screen*/
html,
body {
  height: 100%;
  width: 100%;
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

.piece {
  height: 26.38%;
  width: auto;
}

.Wpiece {
  position: absolute;
  background: no-repeat center;
  height: 12%;
  width: auto;
}
</style>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

import Vue from 'vue';

export default Vue.extend({
  name: 'boardSpace',
  components: {
    HelloWorld,
  },
});
</script>

<script>
function drag(ev) {
  ev.dataTransfer.setData('Image', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('Image');

  ev.target.appendChild(document.getElementById(data));
}
</script>
"
