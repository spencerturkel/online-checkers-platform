<template>
  <b-container>
    <router-view/>
    <div v-if="!$user || !$user.isPremium" class="ad">
      <h1 id="sampleAd">This is an ad. Upgrade now</h1>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style>
.center {
  text-align: center;
}
</style>

<style scoped>
b-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.Buttons {
  position: absolute;
}

#Start {
  top: 20%;
  text-align: center;
  font-size: 1.6em; /*Increases the font size of the start button by x1.6*/
}

.ad {
  position: fixed;

  height: 6.5%;
  width: 100%;

  top: 92.5%;
  left: 0;

  background-color: blue;
}

#sampleAd {
  color: orange;
  vertical-align: middle;
  text-align: center;
  animation: blinker 0.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
