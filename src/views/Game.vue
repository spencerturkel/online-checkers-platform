<template>
    <div>
        <HelloWorld msg="Guess a Letter"/>
        <router-link id="Win" class="Link" to="/win">Win</router-link>
        <router-link id="Lose" class="Link" to="/lose">Lose</router-link>
    
        <div class="container">
            <input id = "Enter"v-model="message">
        </div>
    </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Vue from 'vue';

export default Vue.extend({
  name: 'game-screen',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.Link {
  position: absolute;
}

#Win {
  top: 85%;
}
#Lose {
  top: 95%;
}

.container {
  position: absolute;
  top: 50%;
  width: 100%;
  display: block;
  text-align: center;
}

#Enter {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
