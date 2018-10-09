<template>
  <div id="app">
    <sign-in></sign-in>
    <div id="nav">
      <router-link id="Start"  class = "Buttons" to="/">Home</router-link>
      <router-link id="Account" class = "Buttons" to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SignIn from './components/account/SignIn.vue';

export default Vue.extend({
  components: {
    SignIn,
  },
});
</script>

<style scoped>
#app {
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
}

#Account {
  top: 25%;
  left: 50%;
}
</style>
